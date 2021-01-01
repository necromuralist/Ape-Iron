#! /usr/bin/env python

from distutils.core import setup

setup(name="apeiron",
      version="0.0.0",
      description="Some random generators.",
      packages=["apeiron"],
      requires=["click"],
      entry_points="""
      [console_scripts]
      apeiron=apeiron.main:command_line_interface
      roll=apeiron.random.roll:main
      deal=apeiron.random.draw:main
      """)
