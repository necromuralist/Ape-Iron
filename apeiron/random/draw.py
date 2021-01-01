# from python
import random

# from pypi
import click

SUITS = list("CHSD")
RANKS = ["A"] + list(range(2, 11)) + list("JQK")

@click.command()
@click.option("--cards", default=1, help="Number of cards to draw.")
def draw(cards: int):
    for card in range(cards):
        print(f"{random.choice(RANKS)}{random.choice(SUITS)}")
    return
