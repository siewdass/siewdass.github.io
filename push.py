#!/usr/bin/env python
from subprocess import check_output, STDOUT

check_output([ 'git', 'add', '.' ], stderr = STDOUT )
check_output([ 'git', 'commit', '-m', '"testing"' ], stderr = STDOUT )
cmd = check_output([ 'git', 'push', 'https://siewdass:fbafryb00@github.com/siewdass/siewdass.github.io'], stderr = STDOUT )

list = cmd.split( ' ' )[ -5 ]
commit =  list.split( '..' )[ -1 ]

with open( 'build/build.log', 'w' ) as log:
    log.write( commit )