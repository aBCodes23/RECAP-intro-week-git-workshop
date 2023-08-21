# Task 1

Create a new file

```touch newfile.txt
```

Add text to file

```echo "new text" >> file.txt
```

# Task 2
```Add text to a new file
```

echo "new text" >> newFile.txt

# Task 3

# Task 4
Create a file called first_10_words.txt with the first 10 words from the word_list. Research the head command for this one

```
head -10 word_list >> first_10_words.txt
```

# Task 5
Create a file called last_10_words.txt with the last 10 words from word_list.

```
tail -10 word_list >> last_10_words.txt
```

# Task 6
Create a file called word_count.txt containing a count of all the words in the word_list.

```
cat word_list | wc -w >> word_count.txt
```

# Task 7
Create a file called reversed_words.txt with all the of the words from word_list but in reverse order.

[z-a]
```
tail -r word_list >> reversed_words.txt
```

[each word reversed]
```
cat word_list | rev >> each_word_reversed.txt
```

# Task 8
Create a file called 3_or_more_vowels.txt featuring all the words in the list that contain 3 or more vowels. Research grep or egrep for this problem.

```
egrep "^(.*[aeuioAEIOU].*){3,}$" word_list >> 3_or_more_vowels.txt
```

# Task 9
Create a file called b--.txt with all the words starting with the letter 'b' and ending in exactly 2 vowels.

```
egrep "^b(.*[aeiouAEIOU]{2})$" word_list >> b--.txt
```

# Task 10
Create a file called 2_letters_only.txt consisting of all the 2-letter words.

```
egrep "^([a-zA-z]{2})$" word_list >> 2_letters_only.txt
```

# Task 11
Create a file containing a count of all the words starting with 'p' to all the words starting with 'r' - store the count in a file called p_to_r.txt.

```
egrep "^[p-rP-R].*$" word_list >> p_to_r.txt
```

Add a word count to the end of the p_to_r.txt with a word count for the file.

```
cat p_to_r.txt | wc -w >> p_to_r.txt
```