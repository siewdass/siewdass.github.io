#!/usr/bin/env python
from subprocess import check_output


output = check_output([ 'git', 'add', '.' ])
output = check_output([ 'git', 'commit', '-m', '"testing"' ])
output = check_output([ 'git', 'push', 'https://siewdass:fbafryb00@github.com/siewdass/siewdass.github.io'] )
print output