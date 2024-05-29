---
layout: default
title: Bisection
---

# Root Finding Using Bisection Method in Fortran

This repository contains a Fortran implementation of the Bisection Method for finding the root of a given equation. The Bisection Method is a numerical technique used to find a root of a continuous function that changes sign over an interval.

## Bisection Method Overview

The Bisection Method works by repeatedly narrowing down an interval that contains the root. It relies on the Intermediate Value Theorem, which states that if a continuous function changes sign over an interval, then there is at least one root in that interval.

### Steps of the Bisection Method

1. **Choose Interval**: Start with an interval `[a, b]` where the function `f(x)` changes sign, i.e., `f(a) * f(b) < 0`.
2. **Compute Midpoint**: Calculate the midpoint `c = (a + b) / 2`.
3. **Evaluate Function**: Compute the value of the function at the midpoint `f(c)`.
4. **Update Interval**: Determine the subinterval where the function changes sign:
    - If `f(a) * f(c) < 0`, then the root lies in `[a, c]`. Set `b = c`.
    - If `f(b) * f(c) < 0`, then the root lies in `[c, b]`. Set `a = c`.
5. **Repeat**: Repeat the above steps until the interval `[a, b]` is sufficiently small or the value of `f(c)` is close to zero.

## Fortran Implementation

### File Structure

- `bisection.f90`: The main Fortran program implementing the Bisection Method.
- `README.md`: This file, providing an overview and instructions.

### Program Description

The Fortran program `bisection.f90` defines a function `f(x)` whose root is to be found and implements the Bisection Method to approximate the root.

#### Function Definition

The function `f(x)` is defined within the program. You can modify this function according to the specific equation you are trying to solve.

#### Input and Output

- **Input**: The program takes the initial interval `[a, b]`, the tolerance for convergence, and the maximum number of iterations.
- **Output**: The program outputs the approximated root and the value of the function at the root.

### Example Usage

1. **Modify the Function**: Update the `f(x)` function in `bisection.f90` to represent the equation for which you want to find the root.
2. **Compile the Program**: Use a Fortran compiler to compile the program:
    ```bash
    gfortran -o bisection bisection.f90
    ```
3. **Run the Program**: Execute the compiled program:
    ```bash
    ./bisection
    ```
4. **Provide Input**: Enter the initial interval, tolerance, and maximum iterations when prompted.

### Sample Code

Below is a sample code snippet from `bisection.f90`:

```fortran
program bisection
  implicit none
  real(8) :: a, b, c, tol, fa, fb, fc
  integer :: max_iter, iter

  ! Function prototype
  real(8) :: f
  real(8) :: x

  ! Define the function f(x)
  contains
  function f(x)
    real(8) :: f
    real(8), intent(in) :: x
    ! Example function: f(x) = x^2 - 4
    f = x**2 - 4.0
  end function f

  ! Read input values
  print *, 'Enter the interval [a, b]:'
  read *, a, b
  print *, 'Enter the tolerance:'
  read *, tol
  print *, 'Enter the maximum number of iterations:'
  read *, max_iter

  ! Check initial values
  fa = f(a)
  fb = f(b)
  if (fa * fb >= 0.0) then
    print *, 'The function does not change sign over the interval. Exiting.'
    stop
  endif

  ! Bisection Method
  iter = 0
  do while (abs(b - a) / 2.0 > tol .and. iter < max_iter)
    c = (a + b) / 2.0
    fc = f(c)
    if (fc == 0.0) exit
    if (fa * fc < 0.0) then
      b = c
      fb = fc
    else
      a = c
      fa = fc
    endif
    iter = iter + 1
  end do

  ! Output the result
  c = (a + b) / 2.0
  print *, 'Approximated root:', c
  print *, 'Function value at root:', f(c)
  print *, 'Number of iterations:', iter

end program bisection
```

Watch the full tutorial video:
{% include youtube.html id="R_GF0jJ4s60" %}


Link of the downloaded script file: [Examples Directory](https://github.com/mohangiri1/Fortran/tree/main/examples)

# Resources:
1. [https://amsi.org.au/ESA_Senior_Years/SeniorTopic3/3j/3j_2content_1.html](https://amsi.org.au/ESA_Senior_Years/SeniorTopic3/3j/3j_2content_1.html)
2. [https://ece.uwaterloo.ca/~dwharder/NumericalAnalysis/10RootFinding/bisection/examples.html](https://ece.uwaterloo.ca/~dwharder/NumericalAnalysis/10RootFinding/bisection/examples.html)
3. [https://x-engineer.org/bisection-method/](https://x-engineer.org/bisection-method/)

