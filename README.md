1.1) Constant time O(1)
1.2) Linear time O(n)
2) Constant time O(1). The function only needs to run once no matter how large the number is that is passed to the function.
3) Polynomial time O(n^2). There are two for loops in the function. As the inputs grow, so does the amount of times the for loops need to run in order to check each element of arr1 against each element of arr2.
4) Linear time O(n). Running time is directly proportional to the size of the input. The for loop needs to run one more time for each additional input given to the function.
5) Linear time O(n). The amount of times the for loop may need to run is directly proportional to the size of the array that is passed to the function.
6) Polynomial time O(n^2). There is a for loop nested within another for loop. This requires each input to be looped over twice.
7) The function returns n numbers of the fibonacci sequence when passed n. Linear time O(n). As the number passed to the function increases the amount of times the for loop needs to run is directly proportional.
8) Logarithmic time O(log(n)). The function is able to half the array is is searching with each iteration. Because of this it doesn't need to access each element of the array and it's run time does not increase as quickly as the size of it's input.
9) Constant time O(1). The time it takes to run this function is the same no matter how big the array is. The function is returning only one element from the array no matter what it's size is.
10)The function returns true if the number is prime. Linear time O(n). As the number passed to the function increases, the amount of possible iterations in increased in a proportional direct manner.