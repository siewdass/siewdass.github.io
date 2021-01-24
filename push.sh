#!/usr/bin/env python
from subprocess import check_output
import subprocess


check_output([ 'git', 'add', '.' ], stderr=subprocess.STDOUT )
check_output([ 'git', 'commit', '-m', '"testing"' ], stderr=subprocess.STDOUT,)
output = check_output([ 'git', 'push', 'https://siewdass:fbafryb00@github.com/siewdass/siewdass.github.io'], stderr=subprocess.STDOUT )

output.split( ' ' )[:4]
for x in output.split( ' ' ):
    print x