# Contributing to the project
Since this is a Shared environment, the process to create all the artifacts has been fully automated.  You need to assume it could be re-created at any time.  Please save all your work to your local frequently to prevent losing it.

We are trying to keep the shared environment as clean as possible to prevent any collision between multiple, concurrent users.  


# Jupyter Notebooks

## Python Notebooks
* ***ALWAYS*** save/download a local copy of any notebooks you create.  The shared environment will be refreshed periodically and files in the `Custom` ***folder will be lost***

* Usually, starting from the `Template` notebook and making a copy is the best way to jump start your new Notebook.  There is a Template notebook in both the `Custom` and `Capabilities` folders
* Includes and references at the top should be in its own cell
* If cells should not change in the notebook, add the metadata section to the cell
  * View -> Cell Toolbar -> Edit Metadata
  * Set metadata to `{ "deletable": false, "editable": false, "trusted": true }`
* New notebooks can only be saved to the `Custom` directory


## Please refrain from...
1. Creating new database or collections.  Use the existing data where possible.  If you feel something else is truly needed, see the section [Permanently Publishing Changes](#permanently-publishing-changes) below. 




## MsideUtils Module
The Msideutils module should be imported into your notebook.  Several functions will provide connections, etc for your Notebook.  The current `Capabilities` folder contains many examples, the most commonly used functions are:

**getReadOnlyConn()** - *returns a read only connection to the database*
```
  import MsideUtils as m

  # connect to cluster
  conn = m.getReadOnlyConn()
  handle = conn["sample_mflix"]["movies"]
```

**cprint(txt, colorCd)** - *prints the text in the specified color*.  
```
  # Imports
  import MsideUtils as m

  # Print a sample of color values 0...10
  for i in range(11):
    m.cprint(f'\nColor value: {i}', i)
    
```

## Permanently Publishing Changes
To that end, to get something (notebooks, databases, collections, etc) permanently added into the process so that it will be durable going forward.  Please use the `#presales-mside` slack channel for now.

This process will most likely change as mSIDE matures.  Please feel free to suggest improvements so we can make this better for everyone.


