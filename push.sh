#!/usr/bin/env python
from subprocess import check_output


check_output([ 'git', 'add', '.' ])
check_output([ 'git', 'commit', '-m', '"testing"' ])
output = check_output([ 'git', 'push', 'https://siewdass:fbafryb00@github.com/siewdass/siewdass.github.io'] )
for x in output:
    print x