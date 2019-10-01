#!/bin/bash
set -e

export GITREV=$(git log -1 --format="%H")
export VERSION="SNAPSHOT-$GITREV"

for ARGUMENT in "$@"; do

    KEY=$(echo $ARGUMENT | cut -f1 -d=)
    VALUE=$(echo $ARGUMENT | cut -f2 -d=)

    case "$KEY" in
    version)
        VERSION=${VALUE}
        ;;

    theme)
        THEME=${VALUE}
        ;;
    *) ;;
    esac

done
COMPILE_OPTS="";
MAVEN_PROPERTIES="-Dmapstore2.version=$VERSION"
if [ -n "$THEME" ]; then
    MAVEN_PROPERTIES="$MAVEN_PROPERTIES -Dtheme=$THEME" # adds theme profile for copy correct resources
    COMPILE_OPTS=" -- --env.theme=$THEME"; # add theme env variable for webpack template customizations
fi

npm install
npm run compile $COMPILE_OPTS
npm run lint

mvn -U clean install $MAVEN_PROPERTIES;
