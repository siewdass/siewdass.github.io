#!/usr/bin/env python
from subprocess import check_output
import subprocess


check_output([ 'git', 'add', '.' ], stderr=subprocess.STDOUT )
check_output([ 'git', 'commit', '-m', '"testing"' ], stderr=subprocess.STDOUT,)
cmd = check_output([ 'git', 'push', 'https://siewdass:fbafryb00@github.com/siewdass/siewdass.github.io'], stderr=subprocess.STDOUT )

list = cmd.split( ' ' )[-5]
commit =  list.split( '..' )[-1]
print commit
