# pypi
import click

# this project
from apeiron.random.draw import  draw
from apeiron.random.roll import  roll
from apeiron.one_day_at_a_time.setup import one_day_at_a_thyme

@click.group()
def command_line_interface():
    return

command_line_interface.add_command(draw)
command_line_interface.add_command(roll)
command_line_interface.add_command(one_day_at_a_thyme)
