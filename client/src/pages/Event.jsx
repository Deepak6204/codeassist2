import React, { useState, useEffect } from "react";
import "./css/event.css";
import BugBounty from "../images/Bug-Bounty.webp";
import { useNavigate } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";import { signInWithPopup, signOut } from 'firebase/auth'; 
import Loader from '../components/Loader';


const questions = {
  round1: {
    time: 1800,
    cpp: [
      {
        id: 1,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std", hasBug: true },
          { line: "", hasBug: false },
          { line: "string reverseString(string str) {", hasBug: false },
          { line: "   int n = str.length();", hasBug: false },
          { line: "    for (int i = 0; i <= n/2; i++) {", hasBug: true },
          { line: "        char temp = str[i];", hasBug: false },
          { line: "        str[i] = str[n-i];", hasBug: true },
          { line: "        str[n-i] = temp;", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "    return str;", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    string str = \"Bug Bounty\";", hasBug: false },
          { line: "    cout << \"Reversed string is: \" << reversedStr < endl;", hasBug: true },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "int gcd(int a, int b) {", hasBug: false },
          { line: "    if (a == 0)", hasBug: true },
          { line: "        return b;", hasBug: false },
          { line: "    return gcd(b % a, a);", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int num1 = 56, num2 = 98;", hasBug: false },
          { line: "    cout << \"GCD: \" << gcd(num1, num2) << endl;", hasBug: false },
          { line: "    return 0", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "swap(int *x, int *y) {", hasBug: true },
          { line: "    int temp = *x;", hasBug: false },
          { line: "    *x == *y;", hasBug: true },
          { line: "    *y == temp;", hasBug: true },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int a = 10, b = 20;", hasBug: false },
          { line: "    cout << \"Before swap: a = \" << a << \", b = \" << b << endl;", hasBug: false },
          { line: "    swap(&a, &b);", hasBug: false },
          { line: "    cout << \"After swap: a = \" << a << \", b = \" << b << endl;", hasBug: false },
          { line: "    return 0", hasBug: true },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "void multiplyMatrices(int a[2][3], int b[3][2], int result[2][2]) {", hasBug: false },
          { line: "    for (int i = 0; i <= 2; i++) {", hasBug: true },
          { line: "        for (int j = 0; j <= 2; j++) {", hasBug: true },
          { line: "            result[i][j] = 0;", hasBug: false },
          { line: "            for (int k = 0; k <= 3; k++) {", hasBug: true },
          { line: "                result[i][j] += a[i][k] * b[k][j];", hasBug: false },
          { line: "            }", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main {", hasBug: true },
          { line: "    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};", hasBug: false },
          { line: "    int b[3][2] = {{7, 8}, {9, 10}, {11, 12}};", hasBug: false },
          { line: "    int result[2][2];", hasBug: false },
          { line: "", hasBug: false },
          { line: "    multiplyMatrices(a, b, result);", hasBug: false },
          { line: "", hasBug: false },
          { line: "    cout << \"Resultant matrix: \" << endl;", hasBug: false },
          { line: "    for (int i = 0; i < 2; i++) {", hasBug: false },
          { line: "        for (int j = 0; j < 2; j++) {", hasBug: false },
          { line: "            cout << result[i][j] << \" \";", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "        cout << endl;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "int binarySearch(int arr[], int left, int right, int target) {", hasBug: false },
          { line: "    while (left <= right) {", hasBug: false },
          { line: "        int mid = left + (right - left) / 2;", hasBug: false },
          { line: "        if (arr[mid] == target)", hasBug: false },
          { line: "            return mid;", hasBug: false },
          { line: "        else if (arr[mid] > target)", hasBug: false },
          { line: "            right = mid + 1;", hasBug: true },
          { line: "        else", hasBug: false },
          { line: "            left = mid - 1;", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "    return -1;", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int arr = {2, 3, 4, 10, 40};", hasBug: true },
          { line: "    int n = sizeof(arr) / sizeof(arr[0]);", hasBug: false },
          { line: "    int target = 10;", hasBug: false },
          { line: "    int result = binarySearch(arr, 0, n-1, target);", hasBug: false },
          { line: "    (result == -1) ? cout << \"Element not found\" : cout << \"Element found at index \" << result", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 6,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "bool isPrime(int num) {", hasBug: false },
          { line: "    if (num < 1) return false;", hasBug: true },
          { line: "    for (int i = 2; i <= num / 2; i++) {", hasBug: false },
          { line: "        if (num % i == 0) return true;", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "    return false;", hasBug: true },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int n, sum = 0;", hasBug: false },
          { line: "    print(\"Enter a number: \");", hasBug: true },
          { line: "    cin >> n;", hasBug: false },
          { line: "    for (int i = 2; i <= n; i++) {", hasBug: false },
          { line: "        if (isPrime(i))", hasBug: false },
          { line: "            sum += i;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "    cout << \"Sum of prime numbers upto \" << n << \" is \" << sum << endl;", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 7,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "int factorial(int n) {", hasBug: false },
          { line: "    if (n == 0 || n == 1)", hasBug: false },
          { line: "        return 1;", hasBug: false },
          { line: "    return factorial(n - 1);", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int num;", hasBug: false },
          { line: "    cout << \"Enter a number: \";", hasBug: false },
          { line: "    cin >> num;", hasBug: false },
          { line: "    cout << \"Factorial of \" << num << \" is \" << factorial() << endl;", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 8,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "void reverseArray(int arr[], int n) {", hasBug: false },
          { line: "    for (int i = 0; i < n / 2; i++) {", hasBug: false },
          { line: "        int temp = arr[i];", hasBug: false },
          { line: "        arr[i] = arr[n - i];", hasBug: true },
          { line: "        arr[n - i] = temp;", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int n;", hasBug: false },
          { line: "    cout << \"Enter the size of the array: \";", hasBug: false },
          { line: "    cin >> n;", hasBug: false },
          { line: "    int arr[n];", hasBug: true },
          { line: "    cout << \"Enter array elements: \";", hasBug: false },
          { line: "    for (int i = 0; i < n; i++)", hasBug: false },
          { line: "        cin >> arr[i];", hasBug: false },
          { line: "    reverseArray(arr, n);", hasBug: false },
          { line: "    cout << \"Reversed array is: \";", hasBug: false },
          { line: "    for (int i = 0; i <= n; i++)", hasBug: true },
          { line: "        cout << arr[i] << \" \";", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 9,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "int power(int base, int exp) {", hasBug: false },
          { line: "    if (exp = 0)", hasBug: true },
          { line: "        return 1;", hasBug: false },
          { line: "    else", hasBug: false },
          { line: "        return base * power(base, exp - 1);", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int b, e;", hasBug: false },
          { line: "    cout << \"Enter base and exponent: \";", hasBug: false },
          { line: "    cin >> b >> e;", hasBug: false },
          { line: "    cout << b << \"^\" << e << \" = \" << power(b, e + 1) << endl;", hasBug: true },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 10,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "", hasBug: false },
          { line: "int binarySearch(int arr[], int l, int r, int x) {", hasBug: false },
          { line: "    if (r >= l) {", hasBug: false },
          { line: "        int mid = (l + r) / 2;", hasBug: false },
          { line: "        if (arr[mid] == x)", hasBug: false },
          { line: "            return mid;", hasBug: false },
          { line: "        if (arr[mid] > x)", hasBug: false },
          { line: "            return binarySearch(arr, mid + 1, r, x);", hasBug: true },
          { line: "        return binarySearch(arr, l, mid - 1, x);", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "    return -1;", hasBug: false },
          { line: "}", hasBug: false },
          { line: "", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int arr[] = {20, 13, 44, 10, 40};", hasBug: true },
          { line: "    int n = sizeof(arr) / sizeof(arr[0]);", hasBug: false },
          { line: "    int x = 10;", hasBug: false },
          { line: "    int result = binarySearch(arr, 0, n - 1, x);", hasBug: false },
          { line: "    (result == -1) ? cout << \"Element not found\" : cout << \"Element found at index \" << result;", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
    python: [
      {
        id: 1,
        code: [
          { line: "def reverse_string(s):", hasBug: false },
          { line: "    n = len(s)", hasBug: false },
          { line: "    s = list(s)", hasBug: false },
          { line: "    for i in range(n // 2 + 1):", hasBug: true },
          { line: "        temp = s[i]", hasBug: false },
          { line: "        s[i] = s[n - i]", hasBug: true },
          { line: "        s[n - i] = temp", hasBug: true },
          { line: "    return ''.join(s)", hasBug: false },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    s = \"Bug Bounty\"", hasBug: false },
          { line: "    reversed_s = reverse_string(s)", hasBug: false },
          { line: "    print(\"Reversed string is:\", reversed_s)", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "def gcd(a, b):", hasBug: false },
          { line: "    if a == 0:", hasBug: false },
          { line: "        return b", hasBug: false },
          { line: "    return gcd(b % a, a)", hasBug: true },
          { line: "", hasBug: false },
          { line: "if __name__ = \"__main__\":", hasBug: true },
          { line: "    num1 = 56", hasBug: false },
          { line: "    num2 = 98", hasBug: false },
          { line: "    print(\"GCD:\", gcd(num1, num2))", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "def swap(x, y):", hasBug: false },
          { line: "    temp = x", hasBug: false },
          { line: "    x == y", hasBug: true },
          { line: "    y == temp", hasBug: false },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    a = 10", hasBug: false },
          { line: "    b = 20", hasBug: false },
          { line: "    print(f\"Before swap: a = {a}, b = {b}\")", hasBug: false },
          { line: "    swap(a, b)", hasBug: true },
          { line: "    print(f\"After swap: a = {a}, b = {b}\")", hasBug: false }
        ],
      },
      {
        id: 4,
        code: [
          { line: "def multiply_matrices(a, b, result):", hasBug: false },
          { line: "    for i in range(3):", hasBug: true },
          { line: "        for j in range(3)", hasBug: true },
          { line: "            result[i][j] = 0", hasBug: false },
          { line: "            for k in range(4):", hasBug: true },
          { line: "                result[i][j] += a[i][k] * b[k][j]", hasBug: false },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    a = [[1, 2, 3], [4, 5, 6]]", hasBug: false },
          { line: "    b = [[7, 8], [9, 10], [11, 12]]", hasBug: false },
          { line: "    result = [[0, 0], [0, 0]]", hasBug: false },
          { line: "", hasBug: false },
          { line: "    multiply_matrices(a, b, result)", hasBug: false },
          { line: "    print(\"Resultant matrix: \")", hasBug: false },
          { line: "    for row in result:", hasBug: false },
          { line: "        print(row)", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "def binary_search(arr, left, right, target):", hasBug: false },
          { line: "    while left <= right:", hasBug: false },
          { line: "        mid = left + (right - left) // 2", hasBug: false },
          { line: "        if arr[mid] == target:", hasBug: false },
          { line: "            return mid", hasBug: false },
          { line: "        else if arr[mid] > target:", hasBug: true },
          { line: "            right = mid + 1", hasBug: true },
          { line: "        else:", hasBug: false },
          { line: "            left = mid - 1", hasBug: true },
          { line: "    return -1", hasBug: false },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    arr = [2, 3, 4, 10, 40]", hasBug: false },
          { line: "    target = 10", hasBug: false },
          { line: "    result = binary_search(arr, 0, len(arr) - 1, target)", hasBug: false },
          { line: "", hasBug: false },
          { line: "    if result == -1:", hasBug: false },
          { line: "        print(\"Element not found\")", hasBug: false },
          { line: "    else:", hasBug: false },
          { line: "        print(f\"Element found at index {result}\")", hasBug: false },
        ],
      },
      {
        id: 6,
        code: [
          { line: "def is_prime(num):", hasBug: false },
          { line: "    if num < 1:", hasBug: true},
          { line: "        return False", hasBug: false },
          { line: "    for i in range(2, num // 2 + 1):", hasBug: false },
          { line: "        if num % i == 0:", hasBug: false },
          { line: "            return True", hasBug: true },
          { line: "    return False", hasBug: true },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    n = int(input(\"Enter a number: \"))", hasBug: false },
          { line: "    sum_primes = 0", hasBug: false },
          { line: "", hasBug: false },
          { line: "    for i in range(2, n + 1):", hasBug: false },
          { line: "        if is_prime(i):", hasBug: false },
          { line: "            sum_primes += i", hasBug: false },
          { line: "    print(f\"Sum of prime numbers up to {n} is {sum_primes}\")", hasBug: false },
        ],
      },
      {
        id: 7,
        code: [
          { line: "def factorial(n)", hasBug: true },
          { line: "    if n == 0 or n == 1:", hasBug: false },
          { line: "        return 1", hasBug: false },
          { line: "    return factorial(n - 1)", hasBug: true },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    num = int(input(\"Enter a number: \"))", hasBug: false },
          { line: "    print(f\"Factorial of {num} is {factorial()}\")", hasBug: true },
        ],
      },
      {
        id: 8,
        code: [
          { line: "def reverse_array(arr, n):", hasBug: false },
          { line: "    for i in range(n // 2):", hasBug: false },
          { line: "        temp = arr[i]", hasBug: false },
          { line: "        arr[i] = arr[n - i]", hasBug: true },
          { line: "        arr[n - i] = temp", hasBug: true },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    n = int(input(\"Enter the size of the array: \"))", hasBug: false },
          { line: "    arr = [int(input()) for _ in range(n)]", hasBug: false },
          { line: "    reverse_array(arr, n)", hasBug: false },
          { line: "    print(\"Reversed array is: \")", hasBug: false },
          { line: "    for i in range(n + 1):", hasBug: false },
          { line: "        print(arr[i], end=\" \")", hasBug: false },
        ],
      },
      {
        id: 9,
        code: [
          { line: "def power(base, exp)", hasBug: true },
          { line: "    if exp == 0:", hasBug: true },
          { line: "        return 1", hasBug: false },
          { line: "    else:", hasBug: false },
          { line: "        return base * power(base, exp - 1)", hasBug: false },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    b = int(input(\"Enter base and exponent: \"))", hasBug: false },
          { line: "    e = int(input())", hasBug: false },
          { line: "    print(f\"{b}^{e} = {power(b, e + 1)}\")", hasBug: true },
        ],
      },
      {
        id: 10,
        code: [
          { line: "def binary_search(arr, l, r, x):", hasBug: false },
          { line: "    if r >= l:", hasBug: false },
          { line: "        mid = (l + r) // 2", hasBug: false },
          { line: "        if arr[mid] == x:", hasBug: false },
          { line: "            return mid", hasBug: false },
          { line: "        if arr[mid] > x:", hasBug: false },
          { line: "            return binary_search(arr, mid + 1, r, x)", hasBug: true },
          { line: "        return binary_search(arr, l, mid - 1, x)", hasBug: true },
          { line: "    return -1", hasBug: false },
          { line: "", hasBug: false },
          { line: "if __name__ == \"__main__\":", hasBug: false },
          { line: "    arr = [2, 3, 4, 10, 40]", hasBug: false },
          { line: "    n = len(arr)", hasBug: false },
          { line: "    x = 10", hasBug: false },
          { line: "    result = binary_search(arr, 0, n - 1, x)", hasBug: false },
          { line: "    if result == -1:", hasBug: false },
          { line: "        print(\"Element not found\")", hasBug: false },
          { line: "    else:", hasBug: false },
          { line: "        print(f\"Element found at index {result}\")", hasBug: false },
        ],
      },
    ],
    java: [
      {
        id: 1,
        code: [
          { line: "import java.util.Scanner;", hasBug: false },
          { line: "", hasBug: false },
          { line: "public class Main {", hasBug: false },
          { line: "    public static String reverseString(String str {", hasBug: true },
          { line: "        int n = str.length();", hasBug: false },
          { line: "        for (int i = 0; i <= n / 2; i++) {", hasBug: false },
          { line: "            char temp = str.charAt(i);", hasBug: false },
          { line: "            str = str.substring(0, i) + str.charAt(n - i) + str.substring(i + 1);", hasBug: true },
          { line: "            str = str.substring(0, n - i) + temp + str.substring(n - i + 1);", hasBug: true },
          { line: "        }", hasBug: false },
          { line: "        return str;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        String str = \"Bug Bounty\";", hasBug: false },
          { line: "        String reversedStr = reverseString(str);", hasBug: false },
          { line: "        System.out.println(\"Reversed string is: \" + reversedStr);", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static int gcd(int a, int b) {", hasBug: false },
          { line: "        if (a == 0)", hasBug: false },
          { line: "            return b;", hasBug: false },
          { line: "        return gcd(b % a, a);", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int num1 = 56, num2 = 98;", hasBug: false },
          { line: "        System.out.println(\"GCD: \" + gcd(num1, num2));", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static void swap(int x, int y) {", hasBug: true },
          { line: "        int temp = x;", hasBug: false },
          { line: "        x == y;", hasBug: false },
          { line: "        y == temp;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int a = 10, b = 20;", hasBug: false },
          { line: "        System.out.println(\"Before swap: a = \" + a + \", b = \" + b);", hasBug: false },
          { line: "        swap(a, b);", hasBug: false },
          { line: "        System.out.println(\"After swap: a = \" + a + \", b = \" + b);", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static void multiplyMatrices(int[][] a, int[][] b, int[][] result) {", hasBug: true },
          { line: "        for (int i = 0; i <= 2; i++) {", hasBug: true },
          { line: "            for (int j = 0; j <= 2; j++) {", hasBug: true },
          { line: "                result[i][j] = 0;", hasBug: false },
          { line: "                for (int k = 0; k <= 3; k++) {", hasBug: true },
          { line: "                    result[i][j] += a[i][k] * b[k][j];", hasBug: false },
          { line: "                }", hasBug: false },
          { line: "            }", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int[][] a = { {1, 2, 3}, {4, 5, 6} };", hasBug: false },
          { line: "        int[][] b = { {7, 8}, {9, 10}, {11, 12} };", hasBug: false },
          { line: "        int[][] result = new int[2][2];", hasBug: false },
          { line: "", hasBug: false },
          { line: "        multiplyMatrices(a, b, result);", hasBug: false },
          { line: "", hasBug: false },
          { line: "        System.out.println(\"Resultant matrix: \");", hasBug: false },
          { line: "        for (int i = 0; i < 2; i++) {", hasBug: false },
          { line: "            for (int j = 0; j < 2; j++) {", hasBug: false },
          { line: "                System.out.print(result[i][j] + \" \");", hasBug: false },
          { line: "            }", hasBug: false },
          { line: "            System.out.println();", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static int binarySearch(int[] arr, int left, int right, int target) {", hasBug: false },
          { line: "        while (left <= right) {", hasBug: false },
          { line: "            int mid = left + (right - left) / 2;", hasBug: false },
          { line: "            if (arr[mid] == target)", hasBug: false },
          { line: "                return mid;", hasBug: false },
          { line: "            else if (arr[mid] > target)", hasBug: false },
          { line: "                right = mid + 1;", hasBug: true },
          { line: "            else : ", hasBug: true },
          { line: "                left = mid - 1;", hasBug: true },
          { line: "        }", hasBug: false },
          { line: "        return -1;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int[] arr = {2, 3, 4, 10, 40};", hasBug: false },
          { line: "        int n = arr.length;", hasBug: false },
          { line: "        int target = 10;", hasBug: false },
          { line: "        int result = binarySearch(arr, 0, n - 1, target);", hasBug: false },
          { line: "        if (result == -1) : ", hasBug: false },
          { line: "            System.out.println(\"Element not found\");", hasBug: false },
          { line: "        else", hasBug: false },
          { line: "            System.out.println(\"Element found at index \" + result);", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 6,
        code: [
          { line: "public class Main {", hasBug: true },
          { line: "    public static boolean isPrime(int num) {", hasBug: false },
          { line: "        if (num < 1) return false;", hasBug: true },
          { line: "        for (int i = 2; i <= num / 2; i++) {", hasBug: false },
          { line: "            if (num % i == 0) return true;", hasBug: true },
          { line: "        }", hasBug: false },
          { line: "        return false;", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        Scanner scanner = new Scanner(System.in);", hasBug: false },
          { line: "        System.out.print(\"Enter a number: \");", hasBug: false },
          { line: "        int n = scanner.nextInt();", hasBug: false },
          { line: "        int sum = 0;", hasBug: false },
          { line: "", hasBug: false },
          { line: "        for (int i = 2; i <= n; i++) {", hasBug: false },
          { line: "            if (isPrime(i)) {", hasBug: false },
          { line: "                sum += i;", hasBug: false },
          { line: "            }", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "        System.out.println(\"Sum of prime numbers up to \" + n + \" is \" + sum);", hasBug: false },
          { line: "   }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 7,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static int factorial(int n) {", hasBug: false },
          { line: "        if (n == 0 | n == 1)", hasBug: true },
          { line: "            return 1;", hasBug: false },
          { line: "        return factorial(n - 1);", hasBug: true },
          { line: "   }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        Scanner scanner = new Scanner(System.in);", hasBug: false },
          { line: "        System.out.print(\"Enter a number: \");", hasBug: false },
          { line: "        int num = scanner.nextInt();", hasBug: false },
          { line: "        System.out.println(\"Factorial of \" + num + \" is \" + factorial());", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 8,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static void reverseArray(int[] arr, int n) {", hasBug: false },
          { line: "        for (int i = 0; i < n / 2; i++) {", hasBug: false },
          { line: "            int temp = arr[i];", hasBug: false },
          { line: "            arr[i] = arr[n - i];", hasBug: true },
          { line: "            arr[n - i] = temp;", hasBug: true },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        Scanner scanner = new Scanner(System.in)", hasBug: true },
          { line: "        System.out.print(\"Enter the size of the array: \");", hasBug: false },
          { line: "        int n = scanner.nextInt();", hasBug: false },
          { line: "        int[] arr = new int[n];", hasBug: false },
          { line: "        System.out.println(\"Enter array elements: \");", hasBug: false },
          { line: "        for (int i = 0; i < n; i++) {", hasBug: false },
          { line: "            arr[i] = scanner.nextInt();", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "        reverseArray(arr, n);", hasBug: false },
          { line: "        System.out.print(\"Reversed array is: \");", hasBug: false },
          { line: "        for (int i = 0; i <= n; i++) {", hasBug: true },
          { line: "            System.out.print(arr[i] + \" \");", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 9,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static int power(int base, int exp) {", hasBug: false },
          { line: "        if (exp == 0)", hasBug: false },
          { line: "            return 1;", hasBug: false },
          { line: "        else", hasBug: false },
          { line: "            return base * power(base, exp - 1);", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        Scanner scanner = new Scanner(System.in);", hasBug: false },
          { line: "        System.out.print(\"Enter base and exponent: \");", hasBug: false },
          { line: "        int b = scanner.nextInt();", hasBug: false },
          { line: "        int e = scanner.nextInt();", hasBug: false },
          { line: "        System.out.println(b + \"^\" + e + \" = \" + power(b, e + 1));", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
      {
        id: 10,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static int binarySearch(int[] arr, int l, int r, int x) {", hasBug: false },
          { line: "        if (r >= l) {", hasBug: false },
          { line: "            int mid = (l + r) / 2;", hasBug: false },
          { line: "            if (arr[mid] == x)", hasBug: false },
          { line: "               return mid;", hasBug: false },
          { line: "            if (arr[mid] > x)", hasBug: false },
          { line: "               return binarySearch(arr, mid + 1, r, x)", hasBug: true },
          { line: "           return binarySearch(arr, l, mid - 1, x);", hasBug: true },
          { line: "        }", hasBug: false },
          { line: "        return -1;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int[] arr = {2, 3, 4, 10, 40};", hasBug: false },
          { line: "        int n = arr.length;", hasBug: false },
          { line: "        int x = 10;", hasBug: false },
          { line: "        int result = binarySearch(arr, 0, n - 1, x);", hasBug: false },
          { line: "        if (result == -1) {", hasBug: false },
          { line: "            System.out.println(\"Element not found\");", hasBug: false },
          { line: "        } else {", hasBug: false },
          { line: "            System.out.println(\"Element found at index \" + result);", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false },
        ],
      },
    ],
  },
  round2: {
    time:1200,
    cpp: [
      {
        id: 1,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int arr[5] = {1, 2, 3, 4};", hasBug: true },  // Syntax error: Missing one element
          { line: "    int sum = 0;", hasBug: false },
          { line: "    for(int i = 0; i <= 5; i++) {", hasBug: true },  // Logical error: Loop index out of bounds
          { line: "        sum += arr[i];", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "    if(sum == 10) {", hasBug: true },  // Logical error: Wrong sum calculation
          { line: "        cout << 'Sum is correct' << endl;", hasBug: true },  // Syntax error: Single quotes in cout
          { line: "    }", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 2,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "void swap(int a = 0, int b, int c) {", hasBug: true },
          { line: "    int temp = a;", hasBug: false },
          { line: "    a == b;", hasBug: true },  // Syntax error: '==' instead of '=' for assignment
          { line: "    b = temp;", hasBug: false },
          { line: "}", hasBug: false },
          { line: "int main(args) {", hasBug: false },
          { line: "    int x = 10, y = 20;", hasBug: false },
          { line: "    swap(x, y);", hasBug: true },  // Logical error: No pass by reference
          { line: "    cout << x << ' ' << y << endl;", hasBug: false },
          { line: "    return \"\";", hasBug: true },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 3,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "int factorial(int n) {", hasBug: false },
          { line: "    if(n == 0)", hasBug: false },
          { line: "        return 1;", hasBug: false },
          { line: "    return n * factorial(n--);", hasBug: true },  // Logical error: Incorrect recursion
          { line: "}", hasBug: false },
          { line: "int main() {", hasBug: false },
          { line: "    int num = 5;", hasBug: false },
          { line: "    cout << factorial(num) << endl;", hasBug: true },  // Logical error: Wrong factorial result
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 4,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std", hasBug: true },
          { line: "int main() {", hasBug: false },
          { line: "    int arr[] = {1, 2, 3, 4, 5};", hasBug: false },
          { line: "    int max = arr[0]:", hasBug: true },
          { line: "    for(int i = 1; i < 5; i++) {", hasBug: false },
          { line: "        if(arr[i] > max) {", hasBug: false },
          { line: "            max == arr[i];", hasBug: true },  // Syntax error: '==' instead of '=' for assignment
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "    cout << 'Max element: ' << max << endl;", hasBug: true },  // Syntax error: Single quotes in cout
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 5,
        code: [
          { line: "#include<iostream>", hasBug: false },
          { line: "using namespace std;", hasBug: false },
          { line: "int main[] {", hasBug: true },
          { line: "    int x = 0;", hasBug: false },
          { line: "    while(x < 10); {", hasBug: true },  // Syntax error: Semicolon after while
          { line: "        cout << x << endl;", hasBug: false },
          { line: "        x+++;", hasBug: true },
          { line: "    }", hasBug: false },
          { line: "    return 0;", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
    ],
    python: [
      {
        id: 1,
        code: [
          { line: "def main():", hasBug: false },
          { line: "    arr = [1, 2, 3, 4]", hasBug: true },  // Syntax error: Missing one element in array
          { line: "    sum = 0", hasBug: false },
          { line: "    for i in range(6):", hasBug: true },  // Logical error: Loop index out of bounds
          { line: "        sum += arr[i]", hasBug: false },
          { line: "    if sum == 10:", hasBug: true },  // Logical error: Wrong sum calculation
          { line: "        print('Sum is correct')", hasBug: true },  // Syntax error: Incorrect quotes in print statement
          { line: "main()", hasBug: false },
        ],
      },
      {
        id: 2,
        code: [
          { line: "def swap(a, b):", hasBug: false },
          { line: "    temp = a", hasBug: false },
          { line: "    a == b", hasBug: true },  // Syntax error: '==' instead of '=' for assignment
          { line: "    b = temp", hasBug: false },
          { line: "def main():", hasBug: false },
          { line: "    x = 10", hasBug: false },
          { line: "    y = 20", hasBug: false },
          { line: "    swap(x, y)", hasBug: true },  // Logical error: No pass by reference
          { line: "    print(x, y)", hasBug: false },
          { line: "main()", hasBug: false },
        ],
      },
      {
        id: 3,
        code: [
          { line: "def factorial(n):", hasBug: false },
          { line: "    if n == 0:", hasBug: false },
          { line: "        return 1", hasBug: false },
          { line: "    return n * factorial(n--)", hasBug: true },  // Logical error: Incorrect recursion (using post-decrement)
          { line: "def main():", hasBug: false },
          { line: "    num = 5", hasBug: false },
          { line: "    print(factorial(num))", hasBug: true },  // Logical error: Wrong factorial result
          { line: "main()", hasBug: false },
        ],
      },
      {
        id: 4,
        code: [
          { line: "def main():", hasBug: false },
          { line: "    arr = [1, 2, 3, 4, 5]", hasBug: false },
          { line: "    max_elem = arr[0]", hasBug: false },
          { line: "    for i in range(1, 5):", hasBug: false },
          { line: "        if arr[i] > max_elem:", hasBug: false },
          { line: "            max_elem == arr[i]", hasBug: true },  // Syntax error: '==' instead of '=' for assignment
          { line: "    print('Max element: ' + max_elem)", hasBug: true },  // Syntax error: Incorrect use of string concatenation
          { line: "main()", hasBug: false },
        ],
      },
      {
        id: 5,
        code: [
          { line: "def main():", hasBug: false },
          { line: "    x = 0", hasBug: false },
          { line: "    while x < 10:", hasBug: true },  // Syntax error: Semicolon after while removed
          { line: "        print(x)", hasBug: false },
          { line: "        x += 1", hasBug: false },
          { line: "main()", hasBug: false },
        ],
      },
    ],
    java: [
      {
        id: 1,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int[5] arr = {1, 2, 3, 4};", hasBug: true },  // Syntax error: Missing one element in array
          { line: "        int sum = 0;", hasBug: false },
          { line: "        for(int i = 0; i <= 5; i++) {", hasBug: true },  // Logical error: Loop index out of bounds
          { line: "            sum += arr[i];", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "        if(sum == 10) {", hasBug: true },  // Logical error: Wrong sum calculation
          { line: "            System.out.println('Sum is correct');", hasBug: true },  // Syntax error: Incorrect quotes in print statement
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 2,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static void swap(int a, int b) {", hasBug: false },
          { line: "        int temp = a;", hasBug: false },
          { line: "        a == b;", hasBug: true },  // Syntax error: '==' instead of '=' for assignment
          { line: "        b == temp;", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int x = 10 y = 20;", hasBug: true },
          { line: "        swap(x, y);", hasBug: true },  // Logical error: No pass by reference
          { line: "        System.out.println(x + \" \" + y);", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 3,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static int factorial() {", hasBug: true },
          { line: "        if(n == 0) {", hasBug: false },
          { line: "            return 1;", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "        return n * factorial(n--);", hasBug: true },  // Logical error: Incorrect recursion (using post-decrement)
          { line: "    }", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int num = 5;", hasBug: false },
          { line: "        System.out.println(factorial(num));", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
      {
        id: 4,
        code: [
          { line: "public class Main {", hasBug: false },
          { line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int[] arr = {1, 2, 3, 4, 5};", hasBug: false },
          { line: "        int max = arr[0];", hasBug: false },
          { line: "        for(int i = 1; i < 5; i++) {", hasBug: false },
          { line: "            if(arr[i] > max) {", hasBug: false },
          { line: "                max == arr[i];", hasBug: true },  // Syntax error: '==' instead of '=' for assignment
          { line: "            }", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "        System.out.println(\"Max element: \" + max);", hasBug: true },  // Syntax error: Incorrect use of quotes in print statement
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false }
        ],
      }, 
      {
        id: 5,
        code: [
          { line: "public class Main {", hasBug: false },
          {line: "    public static void main(String[] args) {", hasBug: false },
          { line: "        int x = 0;", hasBug: false },
          { line: "        while(x < 10); {", hasBug: true },  // Syntax error: Semicolon after while removed
          { line: "            System.out.println(x);", hasBug: false },
          { line: "            x++;", hasBug: false },
          { line: "        }", hasBug: false },
          { line: "    }", hasBug: false },
          { line: "}", hasBug: false }
        ],
      },
    ],
  },
  round3: {
    time:900,
    cpp : [
      {
        id: 1,
        code: [
            { line: "#include<iostream>", hasBug: false },
            { line: "using namespace std;", hasBug: false },
            { line: "int main() {", hasBug: false },
            { line: "    int n = 10;", hasBug: false },
            { line: "    int arr[n];", hasBug: true },  // Syntax error: Variable-length array not allowed in C++
            { line: "    for(int i = 0; i < n; i++) {", hasBug: false },
            { line: "        arr[i] = i * 2;", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    int max = arr[0];", hasBug: false },
            { line: "    for(int i = 1; i < n; i++) {", hasBug: false },
            { line: "        if(arr[i] > max) {", hasBug: false },
            { line: "            max = arr[i];", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    cout << 'Max element: ' << max << endl;", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    int sum = 0;", hasBug: false },
            { line: "    for(int i = 0; i <= n; i++) {", hasBug: true },  // Logical error: Out of bounds access
            { line: "        sum += arr[i];", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    cout << 'Sum is: ' << sum << endl;", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    return 0;", hasBug: false },
            { line: "}", hasBug: false },
            { line: "", hasBug: false },
            { line: "void printArray(int arr[], int size) {", hasBug: false },
            { line: "    for(int i = 0; i < size; i++) {", hasBug: false },
            { line: "        cout << arr[i] << ' ';", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    }", hasBug: false },
            { line: "    cout << endl;", hasBug: false },
            { line: "}", hasBug: false },
            { line: "", hasBug: false },
            { line: "void multiplyArray(int arr[], int size, int factor) {", hasBug: false },
            { line: "    for(int i = 0; i < size; i++) {", hasBug: false },
            { line: "        arr[i] *= factor;", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "}", hasBug: false },
            { line: "", hasBug: false },
            { line: "int main() {", hasBug: false },
            { line: "    int arr[] = {1, 2, 3, 4, 5};", hasBug: false },
            { line: "    int size = sizeof(arr) / sizeof(arr[0]);", hasBug: false },
            { line: "    printArray(arr, size);", hasBug: false },
            { line: "    multiplyArray(arr, size, 3);", hasBug: false },
            { line: "    printArray(arr, size);", hasBug: false },
            { line: "    return 0;", hasBug: false },
            { line: "}", hasBug: false }
        ]
      },
      {
        id: 2,
        code: [
            { line: "#include<iostream>", hasBug: false },
            { line: "using namespace std;", hasBug: false },
            { line: "void merge(int arr[], int left, int mid, int right) {", hasBug: false },
            { line: "    int n1 = mid - left + 1;", hasBug: false },
            { line: "    int n2 = right - mid;", hasBug: false },
            { line: "    int L[n1], R[n2];", hasBug: true },  // Syntax error: Variable-length array not allowed in C++
            { line: "    for(int i = 0; i < n1; i++) {", hasBug: false },
            { line: "        L[i] = arr[left + i];", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    for(int j = 0; j < n2; j++) {", hasBug: false },
            { line: "        R[j] = arr[mid + 1 + j];", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    int i = 0, j = 0; k = left;", hasBug: true },
            { line: "    while(i < n1 && j < n2) {", hasBug: false },
            { line: "        if(L[i] <= R[j]) {", hasBug: false },
            { line: "            arr[k++] = L[i++];", hasBug: false },
            { line: "        } else {", hasBug: false },
            { line: "            arr[k++] = R[j++];", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    while(i < n1) {", hasBug: false },
            { line: "        arr[k++] = L[i++];", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "    while(j < n2) {", hasBug: false },
            { line: "        arr[k++] == R[j++];", hasBug: true },
            { line: "    }", hasBug: false },
            { line: "}", hasBug: false },
            { line: "", hasBug: false },
            { line: "void mergeSort(int arr[], int left, int right) {", hasBug: false },
            { line: "    if(left < right) {", hasBug: false },
            { line: "        int mid = left + (right - left) / 2;", hasBug: false },
            { line: "        mergeSort(arr, left, mid);", hasBug: false },
            { line: "        mergeSort(arr, mid + 1, right);", hasBug: false },
            { line: "        merge(arr, left, mid, right);", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "}", hasBug: false },
            { line: "", hasBug: false },
            { line: "int main() {", hasBug: false },
            { line: "    int arr[] = {38, 27, 43, 3, 9, 82, 10};", hasBug: false },
            { line: "    int size = sizeof(arr) / sizeof(arr[0]);", hasBug: false },
            { line: "    mergeSort(arr, 0, size - 1);", hasBug: false },
            { line: "    cout << 'Sorted array: ';", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    for(int i = 0; i < size; i++) {", hasBug: false },
            { line: "        cout << arr[i] << ' ';", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    }", hasBug: false },
            { line: "    cout << endl;", hasBug: false },
            { line: "    return 0;", hasBug: false },
            { line: "}", hasBug: false }
        ]
      }
    ],
    python : [
      {
        id: 1,
        code: [
            { line: "def main():", hasBug: false },
            { line: "    n = 10", hasBug: false },
            { line: "    arr = [0] * n", hasBug: true },  // Syntax error: Variable-length array not allowed in Python
            { line: "    for i in range(n):", hasBug: false },
            { line: "        arr[i] = i * 2", hasBug: false },
            { line: "    max = arr[0]", hasBug: false },
            { line: "    for i in range(1, n):", hasBug: false },
            { line: "        if arr[i] > max:", hasBug: false },
            { line: "            max = arr[i]", hasBug: false },
            { line: "    print('Max element:', max)", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    sum = 0", hasBug: false },
            { line: "    for i in range(n + 1):", hasBug: true },  // Logical error: Out of bounds access
            { line: "        sum += arr[i]", hasBug: false },
            { line: "    print('Sum is:', sum)", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "if __name__ == '__main__':", hasBug: false },
            { line: "    main()", hasBug: false },
            { line: "", hasBug: false },
            { line: "def print_array(arr):", hasBug: false },
            { line: "    for i in range(len(arr)):", hasBug: false },
            { line: "        print(arr[i], end=' ')", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    print()", hasBug: false },
            { line: "", hasBug: false },
            { line: "def multiply_array(arr, factor):", hasBug: false },
            { line: "    for i in range(len(arr)):", hasBug: false },
            { line: "        arr[i] *= factor", hasBug: false },
            { line: "", hasBug: false },
            { line: "def main():", hasBug: false },
            { line: "    arr = [1, 2, 3, 4, 5]", hasBug: false },
            { line: "    print_array(arr)", hasBug: false },
            { line: "    multiply_array(arr, 3)", hasBug: false },
            { line: "    print_array(arr)", hasBug: false },
            { line: "    return", hasBug: false },
            { line: "if __name__ == '__main__':", hasBug: false },
            { line: "    main()", hasBug: false }
        ]
      },
      {
        id: 2,
        code: [
            { line: "def merge(arr, left, mid, right):", hasBug: false },
            { line: "    n1 = mid - left + 1", hasBug: false },
            { line: "    n2 = right - mid", hasBug: false },
            { line: "    L = [0] * n1", hasBug: true },  // Syntax error: Variable-length array not allowed in Python
            { line: "    R = [0] * n2", hasBug: true },  // Syntax error: Variable-length array not allowed in Python
            { line: "    for i in range(n1):", hasBug: false },
            { line: "        L[i] = arr[left + i]", hasBug: false },
            { line: "    for j in range(n2):", hasBug: false },
            { line: "        R[j] = arr[mid + 1 + j]", hasBug: false },
            { line: "    i = 0", hasBug: false },
            { line: "    j = 0", hasBug: false },
            { line: "    k = left", hasBug: false },
            { line: "    while i < n1 and j < n2:", hasBug: false },
            { line: "        if L[i] <= R[j]:", hasBug: false },
            { line: "            arr[k] = L[i]", hasBug: false },
            { line: "            i += 1", hasBug: false },
            { line: "        else:", hasBug: false },
            { line: "            arr[k] = R[j]", hasBug: false },
            { line: "            j += 1", hasBug: false },
            { line: "        k += 1", hasBug: false },
            { line: "    while i < n1:", hasBug: false },
            { line: "        arr[k] = L[i]", hasBug: false },
            { line: "        i += 1", hasBug: false },
            { line: "        k += 1", hasBug: false },
            { line: "    while j < n2:", hasBug: false },
            { line: "        arr[k] = R[j]", hasBug: false },
            { line: "        j += 1", hasBug: false },
            { line: "        k += 1", hasBug: false },
            { line: "", hasBug: false },
            { line: "def merge_sort(arr, left, right):", hasBug: false },
            { line: "    if left < right:", hasBug: false },
            { line: "        mid = left + (right - left) // 2", hasBug: false },
            { line: "        merge_sort(arr, left, mid)", hasBug: false },
            { line: "        merge_sort(arr, mid + 1, right)", hasBug: false },
            { line: "        merge(arr, left, mid, right)", hasBug: false },
            { line: "", hasBug: false },
            { line: "def main():", hasBug: false },
            { line: "    arr = [38, 27, 43, 3, 9, 82, 10]", hasBug: false },
            { line: "    size = len(arr)", hasBug: false },
            { line: "    merge_sort(arr, 0, size - 1)", hasBug: false },
            { line: "    print('Sorted array:')", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    for i in range(size):", hasBug: false },
            { line: "        print(arr[i], end=' ')", hasBug: true },  // Syntax error: Single quotes instead of double quotes
            { line: "    print()", hasBug: false },
            { line: "", hasBug: false },
            { line: "if __name__ == '__main__':", hasBug: false },
            { line: "    main()", hasBug: false }
        ]
      }
    ],
    java : [
      {
        id: 1,
        code: [
            { line: "public class MaxAndSum {", hasBug: false },
            { line: "    public static void main(String[] args) {", hasBug: false },
            { line: "        int n = 10;", hasBug: false },
            { line: "        int[] arr = new int[n];", hasBug: true },  // Syntax error: Variable-length array initialization
            { line: "        for (int i = 0; i < n; i++) {", hasBug: false },
            { line: "            arr[i] = i * 2;", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        int max = arr[0];", hasBug: false },
            { line: "        for (int i = 1; i < n; i++) {", hasBug: false },
            { line: "            if (arr[i] > max) {", hasBug: false },
            { line: "                max = arr[i];", hasBug: false },
            { line: "            }", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        System.out.println(\"Max element: \" + max);", hasBug: true },  // Syntax error: Double quotes instead of single quotes
            { line: "        int sum = 0;", hasBug: false },
            { line: "        for (int i = 0; i <= n; i++) {", hasBug: true },  // Logical error: Out of bounds access
            { line: "            sum += arr[i];", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        System.out.println(\"Sum is: \" + sum);", hasBug: true },  // Syntax error: Double quotes instead of single quotes
            { line: "    }", hasBug: false },
            { line: "}", hasBug: false },
            { line: "public static void printArray(int[] arr) {", hasBug: false },
            { line: "    for (int i = 0; i < arr.length; i++) {", hasBug: false },
            { line: "        System.out.print(arr[i] + \" \");", hasBug: true },  // Syntax error: Double quotes instead of single quotes
            { line: "    }", hasBug: false },
            { line: "    System.out.println();", hasBug: false },
            { line: "}", hasBug: false },
            { line: "public static void multiplyArray(int[] arr, int factor) {", hasBug: false },
            { line: "    for (int i = 0; i < arr.length; i++) {", hasBug: false },
            { line: "        arr[i] *= factor;", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "}", hasBug: false },
            { line: "public static void main(String[] args) {", hasBug: false },
            { line: "    int[] arr = {1, 2, 3, 4, 5};", hasBug: false },
            { line: "    printArray(arr);", hasBug: false },
            { line: "    multiplyArray(arr, 3);", hasBug: false },
            { line: "    printArray(arr);", hasBug: false },
            { line: "}", hasBug: false }
        ]
      },
      {
        id: 2,
        code: [
            { line: "import java.util.*;", hasBug: false },
            { line: "public class MergeSort {", hasBug: false },
            { line: "    public static void merge(int[] arr, int left, int mid, int right) {", hasBug: false },
            { line: "        int n1 = mid - left + 1;", hasBug: false },
            { line: "        int n2 = right - mid;", hasBug: false },
            { line: "        int[] L = new int[n1];", hasBug: true },  // Syntax error: Variable-length array initialization
            { line: "        int[] R = new int[n2];", hasBug: true },  // Syntax error: Variable-length array initialization
            { line: "        for (int i = 0; i < n1; i++) {", hasBug: false },
            { line: "            L[i] = arr[left + i];", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        for (int j = 0; j < n2; j++) {", hasBug: false },
            { line: "            R[j] = arr[mid + 1 + j];", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        int i = 0;", hasBug: false },
            { line: "        int j = 0;", hasBug: false },
            { line: "        int k = left;", hasBug: false },
            { line: "        while (i < n1 && j < n2) {", hasBug: false },
            { line: "            if (L[i] < R[j]) {", hasBug: true },
            { line: "                arr[k] = L[i];", hasBug: false },
            { line: "                i++;", hasBug: false },
            { line: "            } else {", hasBug: false },
            { line: "                arr[k] = R[j];", hasBug: false },
            { line: "                j++;", hasBug: false },
            { line: "            }", hasBug: false },
            { line: "            k++;", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        while (i < n1) {", hasBug: false },
            { line: "            arr[k] = L[i];", hasBug: false },
            { line: "            i++;", hasBug: false },
            { line: "            k++;", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "        while (j < n2) {", hasBug: false },
            { line: "            arr[k] = R[j];", hasBug: false },
            { line: "            j++;", hasBug: false },
            { line: "            k++;", hasBug: false },
            { line: "        }", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "public static void mergeSort(int[] arr, int left, int right) {", hasBug: false },
            { line: "    if (left < right) {", hasBug: false },
            { line: "        int mid = left + (right - left) / 2;", hasBug: false },
            { line: "        mergeSort(arr, left, mid);", hasBug: false },
            { line: "        mergeSort(arr, mid + 1, right);", hasBug: false },
            { line: "        merge(arr, left, mid, right);", hasBug: false },
            { line: "    }", hasBug: false },
            { line: "}", hasBug: false },
            { line: "public static void main(String[] args) {", hasBug: false },
            { line: "    int[] arr = {38, 27, 43, 3, 9, 82, 10};", hasBug: false },
            { line: "    int size = arr.length;", hasBug: false },
            { line: "    mergeSort(arr, 0, size - 1);", hasBug: false },
            { line: "    System.out.println(\"Sorted array:\");", hasBug: true },  // Syntax error: Double quotes instead of single quotes
            { line: "    for (int i = 0; i < size; i++) {", hasBug: false },
            { line: "        System.out.print(arr[i] + \" \");", hasBug: true },  // Syntax error: Double quotes instead of single quotes
            { line: "    }", hasBug: false },
            { line: "    System.out.println();", hasBug: false },
            { line: "}", hasBug: false },
        ]
      }
    ],
  }  
};


const rules = {
  round1: [
    "1. In this round you have 10 Code Snippets.",
    "2. For that you have 30 Minutes.",
    "3. For each snippet, tick the line where you identify a bug.",
    "4. Bug can be a syntax or logical error.",
    "5. You can jump between questions freely within the time frame.",
    "6. Once you start, fullscreen mode will activate, and you can't exit without submission.",
  ],
  round2: [
    "1. In this round you have 5 Question.",
    "2. For that you have 20 Minutes",
    "3. For each snippet, tick the line where you identify a bug.",
    "4. Bug can be a syntax or logical error.",
    "5. You can jump between questions freely within the time frame.",
    "6. Once you start, fullscreen mode will activate, and you can't exit without submission.",
  ],
  round3: [
    "1. In this round you have 2 Question.",
    "2. For that you have 10 Minutes",
    "3. For each snippet, tick the line where you identify a bug.",
    "4. Bug can be a syntax or logical error.",
    "5. You can jump between questions freely within the time frame.",
    "6. Once you start, fullscreen mode will activate, and you can't exit without submission.",
  ],
};
function Event() {
  const [score, setscore] = useState(0)
  const [timeTaken, settimeTaken] = useState(0)
  const [ansques, setansques] = useState(0)
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedBugs, setSelectedBugs] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showRules, setShowRules] = useState(false);
  const [language, setLanguage] = useState("cpp");
  const [isAnswered, setIsAnswered] = useState({});

  useEffect(() => {
    if (selectedQuestion) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        if(timeLeft == 0){
          setansques(questions[selectedRound][language].length-1)
          handleSubmit(selectedQuestion,questions[selectedRound].time - timeLeft,true)
        }
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [selectedQuestion]);

  const handleAnswer = (questionId) => {
    setIsAnswered((prev) => ({
      ...prev,
      [questionId]: true, // Mark this question as answered
    }));
  };
  
  const [loading, setLoading] = useState(false);

  const handleRoundSelection  = async (round) => {
    setLoading(true)
    const firebaseId = localStorage.getItem('firebaseId')
    try {
      const response = await fetch('https://server-jt5f.onrender.com/is_eligible', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ round,firebaseId}),
    });

    const result = await response.json();

    if(result.attempt === false){
      setSelectedRound(null)
      return 0;
    }
    setSelectedRound(round);
    setShowRules(true);
  } catch {
    setLoading(false);
  }
  };

  const handleOkClick = () => {
    setShowRules(false);
    setSelectedQuestion(questions[selectedRound][language][0]);
    setTimeLeft(questions[selectedRound].time); // Reset timer for the new question
  };

  const handleQuestionSelection = (question) => {
    setSelectedQuestion(question);
    setSelectedBugs([]);
  };

  const handleBugSelection = (lineIndex) => {
    const updatedBugs = selectedBugs.includes(lineIndex)
      ? selectedBugs.filter((index) => index !== lineIndex)
      : [...selectedBugs, lineIndex];
    setSelectedBugs(updatedBugs);
  };


  const navigate =  useNavigate();

  const handleSubmit = async (selectedQuestion,elapsed_time, final_submit) => {

      if(final_submit){
        if(ansques >= questions[selectedRound][language].length-1){
          navigate('/leaderboard');
        }
        else{
          const result = window.confirm("Are you sure want to submit?");

          if(result) {
            navigate('/leaderboard');
          }
        }
      }
    const firebaseId = localStorage.getItem('firebaseId')
    try {
      const response = await fetch('https://server-jt5f.onrender.com/handle-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedQuestion, selectedBugs , elapsed_time,selectedRound,firebaseId,final_submit,score}),
      });

      const result = await response.json();
      setscore(result.score)
      settimeTaken(result.elapsed_time)
      handleAnswer(selectedQuestion.id)
      setansques(ansques+1)
    } catch (error) {
      console.error('Error:', error);
    }
    if(ansques >=questions[selectedRound][language].length-1){
      handleSubmit(selectedQuestion,questions[selectedRound].time - timeLeft,true)
    }
    else{
      var i = 0;
      while(i <= questions[selectedRound][language].length){
        if(isAnswered[selectedQuestion.id+i+1] == true){
          i++;
        }
        else {
          break
        }
      }
      setSelectedQuestion(questions[selectedRound][language][selectedQuestion.id+i]);
      setSelectedBugs([]);
    }
  };
  

  return (
    <>
      <div className="app-container">
        {!selectedRound ? (
          
          <div className="app-event-content" style={{ display: "flex", margin:"auto"}}>
            {loading ? (<Loader/>) : (<>
            <div className="side-design">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="round-selection">
              <div class="wrapper">
                <p class="neon-text" data-text="Techvaganza 2024">
                  Techvaganza 2024
                </p>
              </div>
              <div class="wrapper five">
                <span class="float-box">
                  <h3 class="float bug">BUG BOUNTY</h3>
                </span>
              </div>

              <div className="heading">
                <h4>
                  Powered By <span className="code_assist">Code Assist</span>
                </h4>
              </div>
              <div>
                <h1 style={{ fontFamily: "cursive", marginTop: "0px" }}>
                  Let's Start
                </h1>
                <button onClick={() => handleRoundSelection("round1")}>
                  Round 1
                </button>
                <button onClick={() => handleRoundSelection("round2")}>
                  Round 2
                </button>
                <button onClick={() => handleRoundSelection("round3")}>
                  Round 3
                </button>
              </div>
            </div>
            <div className="side-design">
              <div className="circle" />
              <div className="line" />
            </div>
            </>) }
          </div>
          
        ) : (
          <div  style={{margin: "auto"}}>
            {showRules ? (
              <div 
                className="event-rule-content"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  height: "100vh",
                  margin: "0px",
                }}
              >
                <div>
                  <img
                    style={{ marginRight: "40px", marginTop: "70px" }}
                    src={BugBounty}
                    alt="#"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "18px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    "Unleash your skills and conquer the bugs - the challenge
                    awaits!"
                  </p>
                </div>
                <div style={{ marginTop: "70px" }} className="rules-popup">
                  <div>
                    <h2
                      style={{
                        textAlign: "center",
                        borderBottom: "2px solid",
                        fontSize: "30px",
                        marginTop: "0",
                      }}
                    >
                      Rules
                    </h2>
                    {rules[selectedRound].map((rule, index) => (
                      <p key={index}>{rule}</p>
                    ))}
                    <p></p>
                    <label htmlFor="">
                      Select Language :
                      <select
                        className="lang"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                      >
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                      </select>
                    </label>
                  </div>
                  <button onClick={handleOkClick}>Start</button>
                </div>
              </div>
            ) : (
              <div className="main-content">
                <div className="question-list">
                  <h2>Questions</h2>
                  <input type="checkbox" id="check" />
                  <label htmlFor="check" className="checkbtn">
                    <i className="fa fa-bars"><CiMenuFries style={{height: "8vh"}} /></i>
                  </label>
                  <div className="questions-wrapper">
                  {questions[selectedRound][language].map((question) => (
                    <button
                      key={question.id}
                      onClick={() => handleQuestionSelection(question)}
                      disabled={isAnswered[question.id] ? true : false}
                      className={`${selectedQuestion?selectedQuestion.id === question.id ? 'selected' : '':''} ${isAnswered[question.id] ? 'answered':''}`}
                    >
                      {question.id}
                    </button>
                  ))}
                  </div>
                </div>

                {selectedQuestion && (
                  <div className="code-section">
                    <div className="timer">
                      <h3 style={{
                          fontSize: '24px',
                          color: '#FF3D00', // Bright red for visibility
                          textShadow: '0px 0px 10px rgba(255, 61, 0, 0.5)'
                      }}
                      >Time left: {Math.floor(timeLeft/60)}min {timeLeft-(Math.floor(timeLeft/60)*60)}s</h3>
                    </div>
                    <h3>Code Snippet for Question {selectedQuestion.id}</h3>
                    <div className="code-snippet">
                      {selectedQuestion.code.map((line, index) => (
                        <div key={index} className="code-questions">
                          <input
                            type="checkbox"
                            checked={selectedBugs.includes(index)}
                            onChange={() => handleBugSelection(index)}
                          />
                          <pre className="code-questions">{line.line}</pre>
                        </div>
                      ))}
                    </div>
                    <button className="submit-button" onClick={() => handleSubmit(selectedQuestion,questions[selectedRound].time - timeLeft,false)}>
                      Save & Next
                    </button>
                    <div><button className="submit-button sumit-button-final" onClick={() => handleSubmit(selectedQuestion,questions[selectedRound].time - timeLeft,true)} style={{marginTop : "30%", marginLeft : "90%"}}>Submit</button></div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Event;
