const data = [
    {
        "id": 1,
        "title": "Check characters in a string with isalpha()",
        "content": "To check if characters in a string are alphabetic, use the `isalpha()` function:\n\n```cpp\nisalpha(char);\n```",
        "category": "cpp",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany",
        "video": ""
    },
    {
        "id": 2,
        "title": "Get space-separated input with getline()",
        "content": "To get input that is separated by spaces in one string, use `getline()`:\n\n```cpp\ngetline(cin, stringVarName);\n```",
        "category": "cpp",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany",
        "video" : ""
    },
    {
        "id": 3,
        "title": "Convert string to lowercase/uppercase",
        "content": "To make a string all lowercase or uppercase letters, use `transform()`:\n\n```cpp\n#include <cctype>\n#include <string>\n\nstring s;\ntransform(s.begin(), s.end(), s.begin(), ::tolower); // or ::toupper\n```",
        "category": "cpp",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 4,
        "title": "Check for decimal part in a number",
        "content": "To check if a number has a decimal part:\n\n```cpp\nfloat x;\nif (x != (int)x) {\n    // has decimal part\n}\n```",
        "category": "cpp",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 5,
        "title": "Sum of integers from 1 to n",
        "content": "The sum of integers from 1 to $n$ is given by:\n\n$$\\frac{n(n+1)}{2}$$",
        "category": "math",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 6,
        "title": "Distance between two points",
        "content": "The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is:\n\n$$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\nWhere $x_1$ is the x-coordinate of the first point, $x_2$ is the x-coordinate of the second point, etc.",
        "category": "math",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 7,
        "title": "Midpoint of two points",
        "content": "The midpoint $m$ between two points $(x_1, y_1)$ and $(x_2, y_2)$ is:\n\n$$\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$",
        "category": "math",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 8,
        "title": "Fast I/O for competitive programming",
        "content": "To prevent TLE in competitive programming, use fast I/O by adding these lines at the beginning of `main()`:\n\n```cpp\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n```",
        "category": "cpp",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 9,
        "title": "Circular array using modulus",
        "content": "### Circular Array Insertion\nTo make an array circular (where inserting beyond the last index wraps to the start):\n\n1. **Modulus Operator**:\n   - For array size `ArrSize`, the insertion index for `elementIdx` is:\n   $$\\text{index} = (\\text{elementIdx} - 1) \\bmod \\text{ArrSize}$$\n   - Example (Array size = 5):\n     - 6th element: $(6 - 1) \\bmod 5 = 0$\n     - 7th element: $(7 - 1) \\bmod 5 = 1$\n\n2. **Rotation Count**:\n   - Number of full rotations (cycles) completed:\n   $$\\text{rotations} = \\left\\lfloor \\frac{\\text{elementIdx} - 1}{\\text{ArrSize}} \\right\\rfloor$$\n   - Example (Array size = 5, 26th element):\n   $$\\left\\lfloor \\frac{26 - 1}{5} \\right\\rfloor = 5 \\text{ rotations}$$\n\n**Note**: `elementIdx` starts at 1 (not zero-based).",
        "category": "algo",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany",
        "video":""
    },
    {
        "id": 10,
        "title": "Binary search for optimization problems",
        "content": "### Binary Search for Optimization Problems\nBinary search can efficiently solve optimization problems (e.g., finding min/max values) using this approach:\n\n1. **Define Search Space**:\n   - Create a sorted array containing all possible answers for the problem.(The Search Space must be sortable)\n\n2. **Validation Function**:\n   - Implement a boolean function `isValid(answer)` that checks if a candidate solution meets the problem's constraints.\n\n3. **Binary Search Execution**:\n   - Perform binary search on the search space, using `isValid()` to guide the search:\n   ```python\n   left, right = min_search_space, max_search_space\n   while left < right:\n       mid = (left + right) // 2\n       if isValid(mid):\n           right = mid\n       else:\n           left = mid + 1\n   return left\n   ```\n\n**Key Insight**: The technique leverages the monotonic property of the validation function to reduce the search space exponentially.\n\n Let's apply this to a [problem](index.html?category=problems&screen=post-details&id=16)",
        "category": "algo",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany"
    },
    {
        "id": 11,
        "title": "File I/O in C++",
        "content": "For file I/O in C++:\n\nReading from a file:\n```cpp\n#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in(\"input.txt\");\n    string line;\n    while (getline(in, line)) {\n        cout << line << endl;\n    }\n    return 0;\n}\n```\n\nWriting to a file:\n```cpp\n#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream out(\"output.txt\");\n    out << \"Hello, file!\" << endl;\n    out.close();\n    return 0;\n}\n```",
        "category": "cpp",
        "resource": {"in": "", "out": "https://www.eecis.udel.edu/~saunders/progteam/file_io.html"},
        "author": "Mohamed Hany", 
        "video" : ""
    },
    {
        "id": 12,
        "title": "Numerical systems and base conversion",
        "content": "How do bases work?\n\nNo matter what base system you are using, you are always limited by the available number of symbols in that base system.\n\nFor example, in base 10 you have 10 symbols (0-9) to work with. As you count and run out of symbols, you simply add a new digit (slot) and start counting from scratch again. The leftmost digit is the most significant and holds the most weight in our number.\n\nA standardized way to represent a number is to use the base raised to progressive powers and add them together. This is kind of like representing currency with different banknote values.\n\nFor example: 17412 in base 10 is represented as:\n$$1\\times10^4 + 7\\times10^3 + 4\\times10^2 + 1\\times10^1 + 2\\times10^0$$\n\nAs you can see, we have progressive 'tiers' of numbers (units, tens, hundreds, thousands, etc.) repeated to various degrees. Note that the number of repetitions for each 'tier' is limited by our available symbols.\n\nTo represent 21 in base 2 (binary), we can apply a similar principle:\n- Our base is 2, so our 'tiers' are powers of 2\n- We only have two symbols to work with (0 and 1)\n\nThe representation is:\n$$1\\times2^4 + 0\\times2^3 + 1\\times2^2 + 0\\times2^1 + 1\\times2^0$$\nWhich gives us: $$10101_2$$\n\n ## Method 1: \n\nYou can convert decimal to binary by:\n1. Finding the highest power of 2 that fits in your number (for 21, it's $2^4 = 16$)\n2. Then working your way down through smaller powers, adding them if they fit\n\n## Method 2: \n\nAnother conversion method is the division-remainder approach:\n1. Divide the decimal number by 2\n2. Record the remainder\n3. Repeat with the quotient until it reaches 0\n4. The binary number is the remainders read from bottom to top\n\nFor 21, the process looks like:\n\n$$\n\\begin{array}{c|c}\n\\text{Division} & \\text{Remainder} \\\\\n\\hline\n21 ÷ 2 = 10 & 1 \\\\\n10 ÷ 2 = 5 & 0 \\\\\n5 ÷ 2 = 2 & 1 \\\\\n2 ÷ 2 = 1 & 0 \\\\\n1 ÷ 2 = 0 & 1 \\\\\n\\end{array}\n$$\n\nReading the remainders from bottom to top gives us the binary representation: $$10101_2$$\n\n Let's apply this to a [problem](index.html?category=problems&screen=post-details&id=12)",
        "category": "math",
        "resource": {"in": "", "out": ""},
        "author": "Mohamed Hany",
        "video" : "",
    },
    {
        "id": 13,
        "title": "Minimum operations problem (Codeforces 2020A)",
        "content": "### Problem\nFind minimum operations to subtract $k^x$ from $n$ to reach 0.\n\n### Solution\nRepresent $n$ in base-$k$ and sum the digits (Using Method 2 from [Base Conversion](index.html?category=math&screen=post-details&id=11). By using the algorithm from method 2 we are finding which 'tiers' of k to use (powers of k) and we are also getting the number of repititions of such 'tiers' (the remainders from the division method or the digits of the representation of the number n in base-k)):\n\n1. Divide $n$ by $k$ repeatedly\n2. Sum the remainders\n\nExample 1: $n=16$, $k=4$\n$$16 ÷ 4 = 4 \\text{ R } 0$$\n$$4 ÷ 4 = 1 \\text{ R } 0$$\n$$1 ÷ 4 = 0 \\text{ R } 1$$\nSum = 1\n\nExample 2: $n=5$, $k=2$\n$$5 ÷ 2 = 2 \\text{ R } 1$$\n$$2 ÷ 2 = 1 \\text{ R } 0$$\n$$1 ÷ 2 = 0 \\text{ R } 1$$\nSum = 2\n\n```cpp\nint solve(int n, int k) {\n    int ans = 0;\n    while (n != 0) {\n        ans += n % k;\n        n /= k;\n    }\n    return ans;\n}\n```",
        "category": "problems",
        "resource": {"in": "../2020A.png", "out": "https://codeforces.com/contest/2020/problem/A"},
        "author": "Mohamed Hany", 
        "video": ""
    }, 
    {
        "id": 8,
        "title": "DMOJ aac2p0",
        "content": "## Problem\nFind the optimal integer $x$ such that its average with $N$ is maximal and an integer.\n\n## Solution\nUsing the average formula for two numbers:\n\n$$A = \\frac{N + X}{2}$$\n\nTo maximize $A$ while keeping it integer:\n1. $X$ should be as large as possible (close to $N$)\n2. $N + X$ must be even\n\n### Recall That:\n- $\\text{even} + \\text{even} = \\text{even}$\n- $\\text{odd} + \\text{odd} = \\text{even}$\n- $\\text{even} + \\text{odd} = \\text{odd}$\n\nThus, the optimal $X$ is $N - 2$ (next number with same parity):\n\n$$A = \\frac{N + (N - 2)}{2} = \\frac{2N - 2}{2} = N - 1$$\n\n### Code Solution\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    long long n;\n    cin >> n;\n    cout << n-1 << endl;\n    return 0;\n}\n```",
        "category": "problems",
        "resource": {
          "in": "../src/problems/dmoj_aac2p0.png",
          "out": "https://dmoj.ca/problem/aac2p0"
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 16,
        "title": "DMOJ aac2p1",
        "content": "## Problem\nWe are asked to re-arrange the string $S$, such that this arrangement has the minimum number of palindromic substrings $X$. We should output the answer $X$.\n## Solution\nIt should be noted that the most optimal arrangement is if the string has only 1 palindromic substring\ni.e: we should use as many chars from $S$ as possible to form one big palindrome.\n\nA greedy way to get a palindrome is to place even instances of a character at the beginning and end\nif the character's frequency is odd, we can place it in the middle between all the evenly distributed characters,\nfor example\n$S = \\text{acabbacad}$\n$a = 4$\n$b = 2$\n$c = 2$\n$d = 1$\n\nour new $S$ should be:\n$\\text{aabcdcbaa}$\n\nNow what if we have more than one character with an odd frequency? We can see that it's impossible to include all the chars with odd frequencies in our big substring given our chosen algorithm, we will instead put these characters in their own substrings, except for the character with the biggest odd frequency\ni.e: our big substring can only hold 1 character with an odd frequency, all other odd-frequency characters will have to belong to their own separate substring.\n\nSo our solution will be:\n1. Frequency map of characters\n2. Count how many characters with odd frequencies\n3. If no chars with odd frequencies exist $\\rightarrow$ output $1$\n4. Else output $n(\\text{odd\\_chars}) - 1 + 1 \\rightarrow n(\\text{odd\\_chars})$\n\nCode solution:\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\n#define ll long long\n#define endl '\\n'\n#define fio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);\n#define TC int t; cin >> t; while(t--)\n#define FORN for(int i=0; i<n; i++)\n#define ivec vector<int>\n#define svec vector<string>\n\nusing namespace std;\n\nint main() {\n    fio\n    map <char, int> mp;\n    int n;\n    cin >> n;\n    string s;\n    cin >> s;\n    ll sum = 0;\n    for(int i=0; i<s.size(); i++) {\n        mp[s[i]]++;\n    }\n\n    ll max_odd = -1e5;\n    ll odd_cnt = 0;\n\n    for(auto& x : mp) {\n        if (x.second % 2 != 0) {\n            if (x.second > max_odd) {\n                max_odd = x.second;\n            }\n            odd_cnt++;\n        }\n    }\n\n    \n    if (odd_cnt > 0) {\n        cout << odd_cnt << endl;\n    } else {\n        cout << 1 << endl;\n    }\n    \n    return 0;\n\n}\n```",
        "category": "problems",
        "resource": {
          "in": "../src/problems/dmoj_aac2p1.png",
          "out": "https://dmoj.ca/problem/aac2p1"
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 18,
        "title": "Obtaining Same Parity",
        "content": "recall that:\n \n even + even = even\n\nodd + odd = even\n\neven + odd = odd\n\n Let's apply this to a [problem](index.html?category=problems&screen=post-details&id=13)",
        "category": "math",
        "resource": {
          "in": "",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      }, 
      {
        "id": 19,
        "title": "EOI'22 Quals DIV1 Day1 B",
        "content": "## Problem\nFind the minimal value that satisfies a given equation constraint using binary search.\n\n## Solution Approach\n1. **Search Space**: Sorted array from 1 to 2×10⁵\n2. **Validation Function**: Solves the equation to check if a value is valid\n\n### Mathematical Formulation\nThe validation equation transforms as follows:\n\n$$\n\\begin{aligned}\nans &= (a_i - given)^2 \\times b_i \\\\\nans &= (a_i - given)^2 \\\\\n\\sqrt{\\frac{ans}{b_i}} &= a_i - given \\\\\n-given &= -a_i + \\sqrt{\\frac{ans}{b_i}} \\\\\ngiven &= a_i - \\sqrt{\\frac{ans}{b_i}}\n\\end{aligned}\n$$\n\n### Algorithm\n1. Binary search over possible answers\n2. For each midpoint, validate using the equation transformation\n3. Adjust search range based on validation result\n\n### Code Solution\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\nusing namespace std;\n\nconst int MAX_N = 200005;\nlong long a[MAX_N], b[MAX_N];\n\nbool isValid(long long supposedAns, long long x, int n) {\n    long long sum = 0;\n    for (int i = 0; i < n; i++) {\n        if (b[i] == 0) continue;\n        long long dzZero = 0;\n        sum += max(dzZero, a[i] - (long long)sqrt(supposedAns/b[i]));\n    }\n    return sum <= x;\n}\n\nint main() {\n    int t, ts;\n    cin >> t >> ts;\n    \n    while (t--) {\n        int n, x;\n        cin >> n >> x;\n        \n        for (int i = 0; i < n; i++) cin >> a[i];\n        for (int i = 0; i < n; i++) cin >> b[i];\n        \n        long long l = 0, r = 1e18;\n        long long ans = 0;\n        \n        while (l <= r) {\n            long long mid = (l + r) / 2;\n            if (isValid(mid, x, n)) {\n                ans = mid;\n                r = mid - 1;\n            } else {\n                l = mid + 1;\n            }\n        }\n        cout << ans << endl;\n    }\n    return 0;\n}\n```\n\n### Key Points\n- Uses binary search for efficient optimization\n- Mathematical transformation enables validation\n- Handles edge cases (like b[i] = 0)\n- Time Complexity: O(n log(max_answer))",
        "category": "problems",
        "resource": {
          "in": "../src/problems/EOI'22_quals_div1_day1_B.png",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 21,
        "title": "Check equality of strings",
        "content": "To check the equality of strings use\n```cpp\nstring1.compare(string2)\n```\nreturns 0 if both strings are equal.",
        "category": "cpp",
        "resource": {
          "in": "",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      }, 
      {
        "id": 22,
        "title": "ACPC kickoff 2025 practice B",
        "content": "## Problem\nWe are asked to guess an integer $N$ ranging from $0$ to $10^9$, the input will tell us if our guess is bigger or smaller than the number $N$.\n## Solution\nsince the number of steps used can't exceed 30, a naive approach is unfeasible, instead we can utilize binary search our way from $0$ to $10^9$ \n\nour worst case scenario will take $\\lceil\\log_2(10^9)\\rceil \\approx 30$ which is acceptable for the problem\n\ncode solution:\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\n#define ll long long\n#define fio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);\n#define TC int t; cin >> t; while(t--)\n#define FORN for(int i=0; i<n; i++)\n#define FORM for(int j=0; j<m; j++)\n#define ivec vector<int>\n#define svec vector<string>\n#define iimp map<int, int>\n#define cimp map<char, int>\n#define simp map<string, int>\n\nusing namespace std;\n\nint main() {\n    #ifdef HELL_JUDGE\n        freopen(\"input\",\"r\",stdin);\n        freopen(\"output\",\"w\",stdout);\n        freopen(\"error\",\"w\",stderr);\n    #endif\n    \n    vector <ll> v1;\n    ll sz = 1000000009;\n    ll mid = sz/2;\n    char x = 'c';\n    ll st = 0;\n    ll end = sz;\n    cout << mid << endl;\n   \n    if (x == '=') {\n        cout << \"! \" << mid << endl;\n        cout.flush();\n        return 0;\n    }\n    int steps = 0;\n    while(x!='=') {\n        cin >> x;\n        if (x == '>') {\n            st = mid+1;\n            mid = (st+end)/2;\n            cout << mid << endl;\n        } else if (x == '<') {\n            end = mid-1;\n            mid=(st+end)/2;\n            cout << mid << endl;\n        } else if (x == '=') {\n            cout << \"! \" << mid << endl;\n            cout.flush();\n            return 0;\n        }\n    }\n    return 0;\n}\n```",
        "category": "problems",
        "resource": {
          "in": "../src/problems/ACPC_kickoff_2025_practice_B.png",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      }
];