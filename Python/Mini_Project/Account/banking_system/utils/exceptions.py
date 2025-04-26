class InvalidInputError(Exception):
    def __init__(self, message:str) -> None:
        super().__init__(f'@@@ WARNING: Invalid input. You can ONLY press {message}\n')

class NegativeAmountError(Exception):
    def __init__(self) -> None:
        super().__init__('@@@ WARNING: Please enter a positive amount\n')

class InsufficientFundsError(Exception):
    def __init__(self, amount:int, balance:int) -> None:
        super().__init__(f'@@@ WARNING: Low balance. {amount - balance} won in short.\n')

class UserNotFoundError(Exception):
    def __init__(self, username:str) -> None:
        super().__init__(f'@@@ WARNING: User {username} not found\n')

