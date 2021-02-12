# from python
import random

# from pypi
import click

def location() -> str:
    """Get the location"""
    with open("locations.txt") as reader:
        place = random.choice(reader.read().split("\n"))
    return place

def experience() -> str:
    """Get the experience

    Returns:
     the experience you had with the cards
    """
    return random.choice((
        "A mystery, dilemma, or conflict",
        "An unexpected encounter",
        "A planned encounter"
    ))

NEWLINE = "\n"

def get(filename) -> list:
    """Opens the file and splits it into a list
    
    Args:
     filename: text file to read
    
    Returns:
     the lines of the file in a list
    """
    with open(filename) as reader:
        lines = reader.read().split(NEWLINE)
    return lines
    
def deal_cards() -> list:
    """Deal out some daily cards"""
    count = random.randint(1, 6)
    activities = get("activities.txt")
    items = get("items.txt")
    neighbors = get("neighbors.txt")
    events = get("events.txt")
    return random.sample(activities + items + neighbors + events, count)

@click.command()
@click.option("--restart", default=True, help="Restart the location and experience.")
def one_day_at_a_thyme(restart: bool):
    if restart:
        print(f"Location: {location()}")
        print(f"Experience: {experience()}")
    for item in deal_cards():
        print(f" - {item}")
    return
