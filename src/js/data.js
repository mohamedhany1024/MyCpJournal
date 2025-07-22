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
      },
      {
        "id": 23,
        "title": "Codechef EQUALMEX",
        "content": "## Problem\nWe are given an array of size $2N$, we are required to see if it is possible to rearrange this array to form two subarrays of size $N$, such that each subarray has the same MEX.\n\n## Solution\nBefore getting to the general solution, there are some simple observations that we need to make:\n1. if there are no zero's in the given array, then the MEX for the two subarrays will always be 0 so in this case the answer is always YES\n2. if each element in the array is repeated exactly twice, this means that we can form two subarrays that are exact replicas, and in this case their MEX will always be equal\n3. if there is exactly one zero in the given array, the MEX of one of the subarrays will always be 0, so in this case the answer is always NO (that one zero can only belong to ONE of the two subarrays)\n\nif none of the above cases satisfy, we will then apply our general solution\nwe will utilize an ordered frequency map,\nThe ordered property allows us to check if a MEX is possible for the two arrays or not\n\nwhile we are iterating if an element with a frequency is 0 detected, then this is a possible candidate for our MEX, BUT if any element before it has a frequency less than 2, then the current element can't be a MEX for both subarrays since the element with a frequency less than 2 is a MEX of ONE of the subarrays, so our output in that case is NO, if an element of frequency 0 is found and there are NO previous elements with a frequency less than 2 then our answer is YES\n\ncode solution:\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\n#define ll long long\n#define endl '\\n'\n#define fio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);\n#define TC int t; cin >> t; while(t--)\n#define FORN for(int i=0; i<n; i++)\n#define ivec vector<int>\n#define svec vector<string>\n\nusing namespace std;\n\nint num_zeros(vector<int> &v)\n{\n    int cnt = 0;\n    for(int i=0; i<v.size(); i++)\n    {\n        if (v[i] == 0)\n        {\n            cnt++;\n        }\n    }\n    return cnt;\n}\n\nbool exact_replicas(map<ll, ll>& mp)\n{\n    for (auto& x : mp)\n    {\n        if (x.second != 2)\n        {\n            return false;\n        }\n    }\n    return true;\n}\n\nint main()\n{\n    \n    TC\n    {\n        ivec v;\n        int n;\n        cin >> n;\n        map <ll, ll> mp;\n        for(int i=0; i<2*n; i++)\n        {\n            int x;\n            cin >> x;\n            v.push_back(x);\n            mp[x]++;\n        }\n        sort(v.begin(), v.end());\n       \n        int zeros_cnt = num_zeros(v);\n        bool are_replicas = exact_replicas(mp);\n\n        if (zeros_cnt == 0)\n        {\n            cout << \"YES\" << endl;\n        }\n        else if (zeros_cnt != 1 && are_replicas)\n        {\n            cout << \"YES\" << endl;\n        }\n        else if (zeros_cnt == 1)\n        {\n            cout << \"NO\" << endl;\n        }\n        else\n        {\n            \n            bool ca = false;\n            bool less_than_two = false;\n\n            for(int i=0; i<=v.back()+1; i++) {\n                if (mp[i]< 2 && mp[i] != 0) {\n                    less_than_two = true;\n                }\n\n                if (mp[i] == 0) {\n                    if (!less_than_two) {\n                        cout << \"YES\" << endl;\n                        ca = true;\n                        break;\n                    }\n                }\n            }\n            if (!ca) {\n                cout << \"NO\" << endl;\n            }\n        }\n    }\n    return 0;\n}\n```",
        "category": "problems",
        "resource": {
          "in": "../src/problems/codechef_equalmex.png",
          "out": "https://www.codechef.com/problems/EQUALMEX"
        },
        "author": "Mohamed Hany",
        "video": ""
      }, 
      {
        "id": 24,
        "title": "Codechef LOSTEQ",
        "content": "## Problem\nWe are asked if it is possible to reconstruct an array $A$, given an array $B$. Array $B$ was made using the following procedure:\n1. For every element $A_i$ choose an arbitrary $K$\n2. Add to array $B$: $A_i + K$ and $A_i - K$\n3. Randomly shuffle array $B$\n\n## Solution\nIf we sum all elements of array $B$, we notice that:\n- For every arbitrary $+K$ added, a $-K$ is also added (they cancel out)\n- Every $A_i$ is added twice to array $B$\n- Therefore: $\\sum B = \\sum (2A_i)$\n\nWe can validate the input by checking if the sum is even:\n\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\n#define ll long long\n#define endl '\\n'\n#define fio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);\n#define TC int t; cin >> t; while(t--)\n#define FORN for(int i=0; i<n; i++)\n#define ivec vector<int>\n#define svec vector<string>\n\nusing namespace std;\n\nint main() {\n    fio\n    TC {\n        int n;\n        cin >> n;\n        int arr[200005];\n        ll sum = 0;\n        for(int i=0; i<n*2; i++) {\n            cin >> arr[i];\n            sum += arr[i];\n        }\n        cout << ((sum % 2 == 0) ? \"YES\" : \"NO\") << endl;\n    }\n    return 0;\n}\n```",
        "category": "problems",
        "resource": {
          "in": "../src/problems/codechef_losteq2.png",
          "out": "https://www.codechef.com/problems/LOSTSEQ"
        },
        "author": "Mohamed Hany",
        "video": ""
      }, 
      {
        "id": 25,
        "title": "Binary Search Functions in C++",
        "content": "# Binary Search Functions in C++\n\n## binary_search() Function\nChecks if a value exists in a sorted range:\n\n```cpp\nbool binary_search(ForwardIterator first, ForwardIterator last, const T& value);\n```\n\n**C-style array usage:**\n```cpp\nint arr[] = {1, 3, 5, 7, 9};\nint size = sizeof(arr)/sizeof(arr[0]);\nbool found = binary_search(arr, arr + size, 5); // Returns true\n```\n\n**Vector usage:**\n```cpp\nvector<int> vec = {2, 4, 6, 8, 10};\nbool found = binary_search(vec.begin(), vec.end(), 7); // Returns false\n```\n\n## lower_bound() Function\nReturns iterator to first element $\\geq$ value:\n\n```cpp\nForwardIterator lower_bound(ForwardIterator first, ForwardIterator last, const T& value);\n```\n\n**Examples:**\n```cpp\n// Array\nint* lb = lower_bound(arr, arr + size, 4); // Points to 5\n\n// Vector\nauto it = lower_bound(vec.begin(), vec.end(), 5); // Points to 6\n```\n\n## upper_bound() Function\nReturns iterator to first element $>$ value:\n\n```cpp\nForwardIterator upper_bound(ForwardIterator first, ForwardIterator last, const T& value);\n```\n\n**Examples:**\n```cpp\n// Array\nint* ub = upper_bound(arr, arr + size, 5); // Points to 7\n\n// Vector\nauto it = upper_bound(vec.begin(), vec.end(), 6); // Points to 8\n```\n\n## Comparison Table\n\n| Function        | Returns                      | Complexity |\n|----------------|-----------------------------|------------|\n| binary_search() | bool (exists/not)           | $O(\\log n)$ |\n| lower_bound()   | First $\\geq$ value          | $O(\\log n)$ |\n| upper_bound()   | First $>$ value             | $O(\\log n)$ |\n\n## Complete Example\n```cpp\n#include <iostream>\n#include <algorithm>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 30, 40, 50};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    \n    cout << \"Contains 30: \" << binary_search(arr, arr+size, 30) << endl;\n    \n    int* lb = lower_bound(arr, arr+size, 30);\n    cout << \"First 30 at: \" << (lb - arr) << endl;\n    \n    int* ub = upper_bound(arr, arr+size, 30);\n    cout << \"After 30 at: \" << (ub - arr) << endl;\n    \n    vector<int> vec = {5, 10, 15, 20, 25};\n    \n    auto vec_lb = lower_bound(vec.begin(), vec.end(), 12);\n    if (vec_lb != vec.end()) {\n        cout << \"First >=12: \" << *vec_lb << endl;\n    }\n    \n    return 0;\n}\n```\n\n**Key Notes:**\n1. All functions require sorted ranges\n2. Works with any random-access iterators\n3. Custom comparators can be added\n4. For vectors, prefer begin()/end()\n5. For arrays, use pointer arithmetic",
        "category": "cpp",
        "author": "Mohamed Hany"
      },
      {
        "id": 26,
        "title": "getting size of array with sizeof()",
        "content": "# Getting Array Size with sizeof() in C++\n\n## Understanding sizeof()\nThe `sizeof()` operator returns the size (in bytes) of its operand:\n\n```cpp\nsizeof(variable_or_type)\n```\n\n## For C-style Arrays\nTo get the number of elements in a C-style array:\n\n```cpp\ndata_type array[length];\nint size = sizeof(array) / sizeof(array[0]);\n```\n\n**Example:**\n```cpp\nint numbers[] = {10, 20, 30, 40, 50};\nint count = sizeof(numbers) / sizeof(numbers[0]); \n// count = 5\n```\n\n## Why This Works\n- `sizeof(array)` gives total bytes: $\\text{length} \\times \\text{sizeof(data\\_type)}$\n- `sizeof(array[0])` gives bytes per element\n- Division yields element count: $\\frac{\\text{total bytes}}{\\text{element bytes}} = \\text{length}$\n\n## Important Notes\n1. Only works with actual arrays (not pointers)\n2. Doesn't work with dynamic arrays\n3. For vectors, use `vector.size()` instead\n4. Size is calculated at compile-time\n\n## Common Pitfalls\n```cpp\nvoid printSize(int arr[]) {\n    // WRONG - arr is a pointer here\n    int wrong = sizeof(arr) / sizeof(arr[0]); \n}\n```\n\n## Template Alternative (C++11+)\n```cpp\ntemplate<typename T, size_t N>\nsize_t arraySize(T (&)[N]) { return N; }\n\n// Usage:\ndouble values[8];\ncout << arraySize(values); // 8\n```\n\n## Comparison Table\n\n| Method | Works With | Compile-Time | Notes |\n|--------|-----------|--------------|-------|\n| `sizeof`/`sizeof` | C-arrays | Yes | Fails with decayed pointers |\n| Template function | C-arrays | Yes | More robust |\n| `.size()` | Vectors | No | Preferred for STL containers |",
        "category": "cpp",
        "resource": {
          "in": "",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 27,
        "title": "memset & vector initialization",
        "content": "# Understanding memset() and Vector Initialization in C++\n\n## memset() Function\n\n### Syntax\n```cpp\nvoid* memset(void* ptr, int value, size_t num);\n```\n\n### Valid Values\n1. **Byte Values Only** (0 to 255)\n2. Common usage patterns:\n   - `0` for zero initialization\n   - `-1` for setting all bits to 1 (two's complement)\n   - Any value within single-byte range\n\n### Time Complexity\n- $O(n)$ linear time complexity\n- Operates at raw memory level\n\n### Example Usage\n```cpp\nint arr[100];\nmemset(arr, 0, sizeof(arr)); // Zero initialization\n\nchar buffer[1024];\nmemset(buffer, 'A', 512); // Set first 512 bytes to 'A'\n```\n\n## Vector Initialization Methods\n\n### 1. Default Initialization\n```cpp\nvector<int> v1(100); // 100 elements with value 0\n```\n- Complexity: $O(n)$\n\n### 2. Value Initialization\n```cpp\nvector<int> v2(100, 42); // 100 elements with value 42\n```\n- Complexity: $O(n)$\n\n### 3. List Initialization (C++11)\n```cpp\nvector<int> v3 {1, 2, 3, 4, 5}; // Initializer list\n```\n- Complexity: $O(n)$\n\n### 4. Fill Algorithm\n```cpp\nvector<int> v4(100);\nfill(v4.begin(), v4.end(), 42);\n```\n- Complexity: $O(n)$\n\n## Key Differences\n\n| Method | Works With | Type Safety | Flexibility | Typical Use Case |\n|--------|-----------|-------------|-------------|------------------|\n| `memset()` | Raw memory | Unsafe | Limited | Low-level operations |\n| Vector constructor | STL containers | Safe | Moderate | General purpose |\n| `fill()` | STL containers | Safe | High | Mid-operation updates |\n\n## Important Notes\n1. `memset()` works with bytes, not objects\n2. For non-POD types, use proper constructors\n3. Vector initialization is generally preferred\n4. Modern C++ offers more type-safe alternatives\n\n## Performance Considerations\n- `memset()` is faster for large byte arrays ($\\approx$ 2-3x)\n- Vector methods are safer and more flexible\n- Compiler optimizations often make vector initialization efficient",
        "category": "cpp",
        "resource": {
          "in": "",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 28,
        "title": "Codeforces EDU 178 B",
        "content": "## Problem\nWe are given 3 numbers $a$, $b$, $c$ where $a < b < c$. We need to determine if we can deduct values from $c$ and add them to $a$ or $b$ to make $a = b = c$.\n\n## Solution\nGiven $a < b < c$, we approach this in two steps:\n\n1. First attempt to increase $a$ to make $a = b = c$\n2. If that fails, try adding quantity $x$ to both $a$ and $b$ such that:\n   $$c - 2x = a + x = b + x$$\n\nThis leads to the equation:\n$$x = \\frac{c - a}{3}$$\n\nIf $x$ is a whole number, it's possible to balance the values; otherwise, it's impossible.\n\n### Code Solution\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\n#define ll long long\n#define fio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);\n#define TC int t; cin >> t; while(t--)\n\nusing namespace std;\n\nint main() {\n    fio\n    TC {\n        ll a, b, c;\n        cin >> a >> b >> c;\n        ll newC = c - (b - a);\n        \n        if (newC == b) {\n            cout << \"YES\" << endl;\n        } \n        else if (newC < b) {\n            cout << \"NO\" << endl;\n        }\n        else if ((newC - b) % 3 == 0) {\n            cout << \"YES\" << endl;\n        }\n        else {\n            cout << \"NO\" << endl;\n        }\n    }\n    return 0;\n}\n```\n\n### Key Points\n1. The solution checks two possible balancing approaches\n2. Uses modular arithmetic to verify if $x$ is integer\n3. Handles edge cases where direct balancing isn't possible\n4. Time complexity is $O(1)$ per test case\n5. Space complexity is $O(1)$\n\n### Mathematical Insight\nThe core equation $x = \\frac{c - a}{3}$ comes from:\n$$c - 2x = a + x$$\n$$c - a = 3x$$\n$$x = \\frac{c - a}{3}$$\n\nFor the solution to be valid, $x$ must be a non-negative integer.",
        "category": "problems",
        "resource": {
          "in": "../src/problems/cf_2104_A.png",
          "out": "https://codeforces.com/problemset/problem/2104/A"
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 29,
        "title": "Casework Technique",
        "content": "Casework is a technique where we divide the problem into distinct cases, i usually start by picking the most obvious (& more specific) cases first, sometimes, doing the specifc / easy cases first can help lead you to a more general case\n let's see an example of this in a [problem](index.html?category=problems&screen=post-details&id=19)!",
        "category": "algo",
        "resource": {
          "in": "",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 30,
        "title": "Regular Bracket Sequence",
        "content": "# Regular Bracket Sequence (RBS) Definition & Analysis\n\n## Formal Definition\nA **Regular Bracket Sequence** (RBS) is a string consisting solely of parentheses (typically `(` and `)`) that satisfies these conditions:\n1. **Balanced**: Every opening bracket has a corresponding closing bracket\n2. **Properly Nested**: Brackets never close in the wrong order (no `)(`)\n3. **Even Length**: Total length must be even (odd-length sequences are inherently invalid)\n\n## Key Properties\n- **Subsequence Property**: Any contiguous subsequence of an RBS must itself be a balanced sequence\n- **Prefix Property**: At any point in the sequence, the number of opening brackets ≥ closing brackets\n\n## Validation Algorithm (Stack Approach)\n```python\ndef is_rbs(s: str) -> bool:\n    stack = []\n    for char in s:\n        if char == '(':\n            stack.append(char)\n        elif stack:\n            stack.pop()\n        else:\n            return False\n    return len(stack) == 0\n```\n\n### Why This Works\n1. **LIFO Principle**: The stack ensures we always match the most recent opening bracket (Last-In-First-Out)\n2. **Early Termination**: If we try to pop from an empty stack, we immediately know the sequence is invalid\n3. **Final Check**: Empty stack confirms all brackets were properly matched\n\n## Examples\n- Valid: `()`, `(())`, `()(())`\n- Invalid: `)(`, `(()`, `())`\n\n## Edge Cases\n- Empty string (technically valid)\n- Single bracket (always invalid)\n- Alternating brackets `()()` (valid)\n- Deeply nested `((((()))))` (valid)\n\n## Time Complexity\n- **O(n) time**: Single pass through the string\n- **O(n) space**: Worst-case stack usage (e.g., `(((((`)\n\n## Alternative Approaches\n1. **Counter Method**:\n   ```python\n   balance = 0\n   for char in s:\n       balance += 1 if char == '(' else -1\n       if balance < 0: return False\n   return balance == 0\n   ```\n   - More space-efficient (O(1)), but only works for single bracket types\n\n2. **Recursive Validation**:\n   - Remove innermost `()` pairs iteratively until empty or invalid\n   - Less efficient but demonstrates the \"nested\" property\n\n## Practical Applications\n- Syntax validation in compilers/interpreters\n- XML/HTML tag matching\n- Text editor bracket highlighting\n- Memory address validation (stack frames)",
        "category": "algo",
        "resource": {
          "in": "",
          "out": ""
        },
        "author": "Mohamed Hany",
        "video": ""
      },
      {
        "id": 31,
        "title": "ECPC'24 Quals Day 6 G",
        "content": "## Problem\nWe are given a string and are asked if it contains an unbalanced substring.\nAn unbalanced substring is a substring that:\n- It's length is at least 2\n- more than half of it's characters are the same\n## Solution\nit's obvious that checking all possible substring combinations is not feasible, instead what if we could check only a smaller subset of these substring combinations?\n\nlet's start by verifiying this piece of logic:\n\n`if a big substring is unbalanced, then it must have smaller unbalanced substrings as well`\n\nlet's say we have an unbalanced substring of length 10, to satisfy the unbalanced conditions we need to have atleast 6 characters of the same type. let's try visualizing how this might look like\n\n`aaaaaabbbb`\n`ababababaa`\n\n`aaabcdraaa`\n\n`abcbaaabaa`\n\nand so on, \n\ndid you notice something? you will always have a smaller unbalanced substring inside of the bigger substring, matter of fact it can be proven that any unbalanced substring will always have at least one unbalanced substring of length 3\n\nto challenge this, let's try our best to make one big unbalanced substring without a smaller 3 substr\n\nsuppose an unbalanced substr of length 20, we need at least 11 chars of the same type,\n\n`abcabcabcabcabcabcaa`\n\n you can see that if we place our repeated char every 3 chars in the substr, we can only do this 6 times, (20//3  = 6.)) and we need to place our char like this at least 11 time (20//2 + 1) the mathematical relation checks out too\n\n **Key Inequality**:\n\n$\\left\\lfloor \\frac{N}{3} \\right\\rfloor < \\left\\lfloor \\frac{N}{2} \\right\\rfloor + 1$ for all $N \\geq 2$\n\n### Why This Works\n1. **Majority Needs**: \n   - Requires $\\left\\lfloor \\frac{N}{2} \\right\\rfloor + 1$ duplicates\n   - Example for N=4: $\\left\\lfloor \\frac{4}{2} \\right\\rfloor + 1 = 3$\n\n2. **Max Spacing**:\n   - Can space duplicates every 3 chars: $\\left\\lfloor \\frac{N}{3} \\right\\rfloor$\n   - Same N=4: $\\left\\lfloor \\frac{4}{3} \\right\\rfloor = 1$\n\n3. **Inequality Holds**:\n   $$\n   1 < 3 \\quad \\text{(for N=4)}\n   $$\n   ∴ Must have at least one dense window\n\n### Algorithm Impact\n- Only need to check length-3 windows\n- Works because:\n  $$\n  \\text{If } \\exists \\text{ unbalanced string} \\Rightarrow \\exists \\text{ unbalanced length-3 substring}$$ \n\nso, our solution will simply be a fixed-size sliding window of length 3, if an unbalanced substr is detected output YES otherwise output NO\n\ncode solution:\n```cpp\n#include <iostream>\n#include <bits/stdc++.h>\n#define ll long long\n#define fio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);\n#define TC int t; cin >> t; while(t--)\n#define FORN for(int i=0; i<n; i++)\n#define FORM for(int j=0; j<m; j++)\n#define DBB if(debug)\n#define ivec vector<int>\n#define svec vector<string>\n#define iimp map<int, int>\n#define cimp map<char, int>\n#define simp map<string, int>\n\nusing namespace std;\nbool debug = 0;\n\nbool window_check(string s, int start) {\n\n    set <char> s1;\n    for(int i=start; i<start+3; i++) {\n        if (i < s.size()) {\n            s1.insert(s[i]);\n        } else {\n            return false;\n        }\n    }\n\n    if (s1.size() < 3) {\n        return true;\n    } else {\n        return false;\n    }\n}\nint main() {\n    #ifdef HELL_JUDGE\n        freopen(\"input\",\"r\",stdin);\n        freopen(\"output\",\"w\",stdout);\n        freopen(\"error\",\"w\",stderr);\n    #endif\n    fio\n    int n;\n    cin >> n;\n    string s;\n    cin >> s;\n       \n    for(int i=0; i<n; i++) {\n        if (window_check(s, i)) {\n            cout << \"YES\" << endl;\n            return 0;\n        }\n    }\n\n    cout << \"NO\" << endl;\n    return 0;\n}\n\n```",
        "category": "problems",
        "resource": {
          "in": "../src/problems/ECPC_2024_quals_day6_G.png",
          "out": "https://codeforces.com/group/Rilx5irOux/contest/538517/problem/G"
        },
        "author": "Mohamed Hany",
        "video": ""
        
      }
];