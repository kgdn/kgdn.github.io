# Author: Kieran Gordon
# Date: 13/06/2022
#
# Description: This Python script will create a new post in the _posts/ directory.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

from datetime import date
import os

date = date.today()

def main():
    title = input("Enter title: ")
    if title == "":
        title = "Untitled Blog Post"
        
    description = input("Enter description: ")
    if description == "":
        description = "No description"
        
    author = input("Enter author (press enter for default): ")
    if author == "":
        author = "Kieran Gordon"
        
    tags = input("Enter tag(s): ")
    tags_list = tags.replace(" ", ", ").split(", ") # Split tags into a list
    
    file_name = title.replace(" ", "-") + ".md" # Replace spaces with hyphens
    file_name = file_name.lower() # Convert to lowercase
    
    # Create the file in the YYYY-MM-DD-title.md format
    f = open("_posts/" + str(date) + "-" + file_name, "x")
    f.write("---\n")
    f.write("layout: post\n")
    f.write("title: \"" + title + "\"\n")
    f.write("date: \"" + str(date) + "\"\n")
    f.write("description: \"" + description + "\"\n")
    f.write("author: \"" + author + "\"\n")
    f.write("tags: " + str(tags_list) + "\n") # Convert tags list to string
    f.write("---\n")
    f.close() # Close the file
    
    print("Post created!")
    
    # Open the new post in the default editor
    editor = os.getenv('EDITOR')
    os.system(editor + ' ' + "_posts/" + str(date) + "-" + file_name)
        
if __name__ == "__main__":
    main()