class Transaction:
    def __init__(self, tx_type:str, amount:int, balance:int) -> None:
        self.tx_type = tx_type
        self.amount = amount
        self.balance = balance

    def __str__(self) -> str:
        if self.tx_type == 'deposit':
            return f'[{self.tx_type}]: + {self.amount} won. {self.balance} won left'
        else:
            return f'[{self.tx_type}]: - {self.amount} won. {self.balance} won left'

    def to_tuple(self) -> tuple:
        return self.tx_type, self.amount, self.balance  # return as tuple
