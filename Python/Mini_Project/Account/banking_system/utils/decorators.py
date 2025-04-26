from typing import Callable

from banking_system.utils.exceptions import NegativeAmountError, InsufficientFundsError


def validate_transaction(func: Callable) -> Callable:
    def wrapper(self, dummy) -> None:
        while True:
            """" detaching as a function is better. 
                 not suitable for OOP.
                 just @decorator practice """
            amount = input('>> Enter the amount(q to quit): ')
            if amount == 'q':
                break
            try:
                amount = int(amount)  # 정수가 아니면 raise ValueError
                if amount <= 0:
                    raise NegativeAmountError()
                func(self, amount)  # self: needs instance address
                break
            except ValueError as e:
                print(f'{type(e)}: Press the NUMBER.\n')
            except NegativeAmountError as e:
                print(e)
            except InsufficientFundsError as e:
                print(e)
    return wrapper

