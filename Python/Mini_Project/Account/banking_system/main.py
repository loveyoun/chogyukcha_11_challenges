from banking_system.services.banking_service import BankingService
from banking_system.utils.exceptions import InvalidInputError, UserNotFoundError


def main() -> None:
    bs = BankingService()

    while True:
        try:
            rs = input('> 1. 서비스 이용, 2. 사용자 추가, 3. 종료: ')
            if rs == '1':
                while True:
                    user_name = input('>> Enter username(q to quit): ')
                    if user_name == 'q':
                        break
                    try:
                        bs.find_user(user_name)
                        bs.user_menu(user_name)  # else
                        break
                    except UserNotFoundError as e:
                        print(e)
            elif rs == '2':
                user_name = input('>> Enter username(q to quit): ')
                if user_name == 'q':
                    continue
                bs.add_user(user_name)
            elif rs == '3':
                break
            else:
                raise InvalidInputError('1,2,3')
        except InvalidInputError as e:
            print(e)


if __name__ == '__main__':
    main()
