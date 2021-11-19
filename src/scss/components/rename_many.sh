#!/bin/bash

# move *.css to *.scss in current directory

for file in *.css
do
    mv -i "${file}" "${file/.css/.scss}"
done

