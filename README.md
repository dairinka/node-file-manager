# File Manager

## Description

File Manager was implemented using Node.js APIs.

The file manager is able to do the following:

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Technical requirements

- No external dependencies
- Use 20 LTS version of Node.js
- The program is started by npm-script `start` in following way:
```bash
npm run start -- --username=your_username
```
- After starting the program displays the following text in the console (`Username` is equal to value that was passed on application start in `--username` CLI argument)  
`Welcome to the File Manager, Username!`  
- After program work finished (`ctrl + c` pressed or user sent `.exit` command into console) the program displays the following text in the console  
`Thank you for using File Manager, Username, goodbye!`  
- At the start of the program and after each end of input/operation current working directory is printed in following way:  
`You are currently in path_to_working_directory`  
- Starting working directory is current user's home directory (for example, on Windows it's something like `system_drive/Users/Username`)
- By default program prompts user in console to print commands and wait for results  
- In case of unknown operation or invalid input (missing mandatory arguments, wrong data in arguments, etc.) `Invalid input` message is shown and user is able to enter another command
- In case of error during execution of operation `Operation failed` message is shown and user is able to enter another command 

List of operations and their syntax:
- Navigation & working directory (nwd)
    - Go upper from current directory  
    ```bash
    up
    ```
    - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd path_to_directory
    ```
    - Print in console list of all files and folders in current directory. List contains:
        - files and folder names (for files - with extension)
        - folders and files are sorted in alphabetical order ascending, but list of folders goes first
        - type of directory content is marked explicitly
    ```bash
    ls
    ```
- Basic operations with files
    - Read file and print it's content in console (using Readable stream): 
    ```bash
    cat path_to_file
    ```
    - Create empty file in current working directory: 
    ```bash
    add new_file_name
    ```
    - Rename file (content remains unchanged): 
    ```bash
    rn path_to_file new_filename
    ```
    - Copy file (using Readable and Writable streams): 
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file (same as copy but initial file is deleted, using Readable and Writable streams): 
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file: 
    ```bash
    rm path_to_file
    ```
- Operating system info (prints following information in console)
    - Get EOL (default system End-Of-Line) and print it to console  
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console  
    ```bash
    os --cpus
    ```
    - Get home directory and print it to console  
    ```bash
    os --homedir
    ```
    - Get current *system user name* and print it to console  
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled and print it to console  
    ```bash
    os --architecture
    ```
- Hash calculation  
    - Calculate hash for file and print it into console  
    ```bash
    hash path_to_file
    ```
- Compress and decompress operations  
    - Compress file (using Brotli algorithm, using Streams API)  
    ```bash
    compress path_to_file path_to_destination
    ```
    - Decompress file (using Brotli algorithm, using Streams API)  
    ```bash
    decompress path_to_file path_to_destination
    ```  
    After decompressing of previously compressed file result not differs with originally compressed file.
    