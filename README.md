# geo-commit

A small pre commit hook that creates a log 
containing your current position on this planet. 
Also includes a node script to convert the logs into a geojson file.

Only runs on osx (so far).

---

## Installation

TODO




## Hook Installation

To install the pre commit hook, just link or copy the `pre-commit` file to 
`.git/hooks/pre-commit` in your project folder. If the folder `.git/hooks` 
does not exist so far, just create it.

Use this command for a symlink (recommended):

    mkdir -p ./.git/hooks && cp /path/to/original/pre-commit ./.git/hooks/pre-commit

And this to copy the whole script (harder to update):

    mkdir -p ./.git/hooks \&& ln -s /Users/thomaskekeisen/Projects/geo-commit/pre-commit ./.git/hooks/pre-commit
    
I can also recommend to add two nice aliases in your `~/.profile` file, 
then you can just call `geo_commit_on` and `geo_commit_off` within the projects
root directory (that one that contains the `.git` folder).
     
    alias geo_commit_on='mkdir -p ./.git/hooks && ln -s /path/to/original/pre-commit ./.git/hooks/pre-commit'
    alias geo_commit_off='rm ./.git/hooks/pre-commit'
    
## Export geo-commits.json

TODO

## Screenshots

A screenshot of a generated geo-commits.json using [http://geojson.io](http://geojson.io).

![Screenshot geojson.io](https://raw.githubusercontent.com/blaues0cke/geo-commit/master/images/screenshot-geojson.io.png "Screenshot geojson.io")
    
## Thanks to

### Sounds

Sounds are from [http://rcptones.com/dev_tones/](http://rcptones.com/dev_tones/). A nice sound sound set I use in some of my
commercial projects.