# from python
import random

# from pypi
import click

@click.command()
@click.option("--dice", default=1, help="Number of dice to roll.")
@click.option("--sides", default=6, help="Number of sides to each die.")
def roll(dice: int, sides: int):
    """Roll the dice"""
    for die in range(dice):
        print(random.randint(1, sides))
    return
