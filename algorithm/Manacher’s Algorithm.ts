/**
 * 
 * 
 * let C be the current center of the current longest palindrome
 * let R be the radius of the same palindrome
 * let P be an array of radius of palindrome found at each index
 * 
 * the idea is that:
 * for each index you will expand around it to see how har the palindrome will go.
 * save that at P[i]
 * then at latter i, if it is smaller than R, meaning i is with R, or meaning current character is part of the current longest palindrome.
 * 
 * that would suggest that, flipping to the left side of the center of current longest, you will find a matching char that is exactly the same. That's how palindrome works. 
 * 
 * at the same time, the content of the mirroring index or matching index on the left, can tell you the content around i but only for the content that is within R.
 * 
 * so string[mirror] has to === string[i]
 * P[mirror] might be long, but the portion that's within R, or meaning within the palindrome is exact the same for P[i]
 * so P[i] can copy either P[mirror] or R - i over
 * 
 * but of course the palindrome at i can actually be longer, so that's where we will further expand after copying P[mirror] or R - i over
 * 
 * time:
 * O(n) there won't be any overlapping loopping during any manually expanding
 * space
 * O(n), the making of the `#` string
 * 
 * 
 */
