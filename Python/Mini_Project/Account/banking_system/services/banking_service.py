from typing import Optional, Any
from banking_system.models.user import User
from banking_system.utils.exceptions import UserNotFoundError, InvalidInputError, NegativeAmountError, \
    InsufficientFundsError


class BankingService:
    def __init__(self) -> None:
        self.users = []

    def add_user(self, username:str) -> None:
        self.users.append(User(username))
        print(f'[Announcement] Added user "{username}"\n')

    def find_user(self, username:str) -> User:  # Optional[Any]:
        for user in self.users:
            if user.username == username:
                return User(username)
        raise UserNotFoundError(username)

    def user_menu(self, username:str) -> None:
        user = self.find_user(username)   # try~catch no need.
        user_account = user.account

        while True:
            print('> 1. deposit, 2. withdraw, 3. check_balance, 4. transaction_history')
            rs = input('> Press the number or q to quit: ')
            # if rs.isdigit() and int(rs) > 4 or int(rs) < 1:
            #     print('Invalid input. Try again.')
            #     continue

            """" main()으로 갈지 바로 종료할지 """
            if rs == 'q':
                break
            try:
                if rs == '1':
                    user_account.deposit(1)  # dummy input for @decorator
                elif rs == '2':
                    user_account.withdraw(1)
                elif rs == '3':
                    print(f'[Announcement] Current balance: {user.account.get_balance()} won\n')
                elif rs == '4':
                    for tx in user_account.get_transactions():
                        print(tx)
                else:
                    raise InvalidInputError('1,2,3,4 or q')
            except InvalidInputError as e:
                print(e)