# pypi
import click

# this project
from apeiron.random.draw import  draw
from apeiron.random.roll import  roll

@click.group()
def command_line_interface():
    return

command_line_interface.add_command(draw)
command_line_interface.add_command(roll)
