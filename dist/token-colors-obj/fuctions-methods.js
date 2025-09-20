"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionsMethods = void 0;
/*
Code Examples:

TypeScript:
function calculateTotal(price: number): number {
    return price * 1.2;
}

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}

const result = calculateTotal(100);
const sum = calculator.add(5, 3);
→ Color affects: calculateTotal, add (function names when declared and called)

Python:
def calculate_total(price: float) -> float:
    return price * 1.2

class Calculator:
    def add(self, a: float, b: float) -> float:
        return a + b

result = calculate_total(100)
sum_val = calculator.add(5, 3)
→ Color affects: calculate_total, add (function names when declared and called)

PHP:
function calculateTotal($price) {
    return $price * 1.2;
}

class Calculator {
    public function add($a, $b) {
        return $a + $b;
    }
}

$result = calculateTotal(100);
$sum = $calculator->add(5, 3);
→ Color affects: calculateTotal, add (function names when declared and called)

Go:
func calculateTotal(price float64) float64 {
    return price * 1.2
}

type Calculator struct{}

func (c Calculator) Add(a, b float64) float64 {
    return a + b
}

result := calculateTotal(100)
sum := calculator.Add(5, 3)
→ Color affects: calculateTotal, Add (function names when declared and called)

Kotlin:
fun calculateTotal(price: Double): Double {
    return price * 1.2
}

class Calculator {
    fun add(a: Double, b: Double): Double {
        return a + b
    }
}

val result = calculateTotal(100.0)
val sum = calculator.add(5.0, 3.0)
→ Color affects: calculateTotal, add (function names when declared and called)

Java:
public double calculateTotal(double price) {
    return price * 1.2;
}

public class Calculator {
    public double add(double a, double b) {
        return a + b;
    }
}

double result = calculateTotal(100);
double sum = calculator.add(5, 3);
→ Color affects: calculateTotal, add (method names when declared and called)

C:
double calculateTotal(double price) {
    return price * 1.2;
}

int add(int a, int b) {
    return a + b;
}

double result = calculateTotal(100.0);
int sum = add(5, 3);
→ Color affects: calculateTotal, add (function names when declared and called)

C#:
public double CalculateTotal(double price) {
    return price * 1.2;
}

public class Calculator {
    public double Add(double a, double b) {
        return a + b;
    }
}

double result = CalculateTotal(100);
double sum = calculator.Add(5, 3);
→ Color affects: CalculateTotal, Add (method names when declared and called)

C++:
double calculateTotal(double price) {
    return price * 1.2;
}

class Calculator {
public:
    double add(double a, double b) {
        return a + b;
    }
};

double result = calculateTotal(100.0);
Calculator calculator;
double sum = calculator.add(5.0, 3.0);
→ Color affects: calculateTotal, add (function/method names when declared and called)
*/
// FUNCTIONS/METHODS
exports.functionsMethods = [
    {
        scope: [
            "entity.name.function",
            "meta.function-call",
            "support.function"
        ],
        settings: {
            foreground: "#417FBB",
            fontStyle: "medium"
        }
    }
];
