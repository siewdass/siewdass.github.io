#!/usr/bin/env bash
git add . >> /dev/null 2>&1
git commit -m "TESTING" >> /dev/null 2>&1
git push https://siewdass:fbafryb00@github.com/siewdass/siewdass.github.io &> build/build.log
awk 'NF>4{print $NF}' build/build.log