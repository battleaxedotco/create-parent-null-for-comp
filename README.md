# Create parent null for all layers

By request for Laura Calvo

## What this script does:

1. If `config.preferSelection` = `true` and you have selected layers, will only target the selection
2. If `config.preferSelection` = `false`, or if `true` and you have no selected layers, will target all layers not currently locked
3. Creates a new null at the top of your active comp, names it according to `config.name` at the top of the script
4. Iterates through the list determined by #1 or #2 and parents all children to this null
