# geo-commit

A small pre commit hook that creates a log 
containing your current position on this planet.

Only runs on osx (so far).

---

## Usage

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