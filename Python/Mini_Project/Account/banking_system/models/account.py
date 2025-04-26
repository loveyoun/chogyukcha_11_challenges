from banking_system.models.transaction import Transaction
from banking_system.utils.decorators import validate_transaction
from banking_system.utils.exceptions import InsufficientFundsError


class Account:
    bank_name = "default bank"

    @classmethod
    def get_bank_name(cls) -> str:
        return cls.bank_name

    @classmethod
    def set_bank_name(cls, name: str) -> None:
        cls.bank_name = name

    def __init__(self) -> None:
        self.__balance = 10000
        self.__txs = []

    @validate_transaction
    def deposit(self, amount:int) -> None:  # @Error: acc:Account
        # if amount >= 0:  # @decorator
        self.__balance += amount
        self.__txs.append(Transaction('deposit', amount, self.__balance))
        print(f'[Announcement] {amount} won deposited successfully\n')

    @validate_transaction
    def withdraw(self, amount:int) -> None:
        if amount <= self.__balance:
            self.__balance -= amount
            self.__txs.append(Transaction('withdraw', amount, self.__balance))
            print(f'[Announcement] {amount} won withdrawn successfully\n')
        else:  # elif amount > self.__balance:
            raise InsufficientFundsError(amount, self.__balance)

    def get_balance(self) -> int:
        return self.__balance

    def get_transactions(self) -> list:
        return self.__txs   # __str__ defined
