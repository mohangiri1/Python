---
layout: default
title: Newton-Raphson
---

# Root Finding Using Newton-Raphson Method in Fortran

This repository contains a Fortran implementation of the Newton-Raphson Method for finding the root of a given equation. The Newton-Raphson Method is a numerical technique used to find the root of a function by iteratively improving the approximation of the root.

## Newton-Raphson Method Overview

The Newton-Raphson Method works by using the derivative of the function to approximate the root. It starts with an initial guess and iteratively refines this guess using the formula:

\[ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \]

where:
- \( x_{n+1} \) is the new approximation of the root,
- \( x_n \) is the current approximation,
- \( f(x_n) \) is the value of the function at \( x_n \),
- \( f'(x_n) \) is the value of the derivative of the function at \( x_n \).

### Steps of the Newton-Raphson Method

1. **Initial Guess**: Start with an initial guess \( x_0 \).
2. **Iterative Update**: Compute the next approximation using \( x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \).
3. **Convergence Check**: Repeat the update until the difference between successive approximations is within a specified tolerance or the maximum number of iterations is reached.

## Fortran Implementation

### File Structure

- `newton_raphson.f90`: The main Fortran program implementing the Newton-Raphson Method.
- `README.md`: This file, providing an overview and instructions.

### Program Description

The Fortran program `newton_raphson.f90` defines a function `f(x)` and its derivative `f_prime(x)` whose root is to be found, and implements the Newton-Raphson Method to approximate the root.

#### Function and Derivative Definitions

The function `f(x)` and its derivative `f_prime(x)` are defined within the program. You can modify these functions according to the specific equation you are trying to solve.

#### Input and Output

- **Input**: The program takes the initial guess, the tolerance for convergence, and the maximum number of iterations.
- **Output**: The program outputs the approximated root and the value of the function at the root.

### Example Usage

1. **Modify the Function**: Update the `f(x)` and `f_prime(x)` functions in `newton_raphson.f90` to represent the equation for which you want to find the root.
2. **Compile the Program**: Use a Fortran compiler to compile the program:
    ```bash
    gfortran -o newton_raphson newton_raphson.f90
    ```
3. **Run the Program**: Execute the compiled program:
    ```bash
    ./newton_raphson
    ```
4. **Provide Input**: Enter the initial guess, tolerance, and maximum iterations when prompted.

### Sample Code

Below is a sample code snippet from `newton_raphson.f90`:

```fortran
program newton_raphson
  implicit none
  real(8) :: x, tol, fx, fpx
  integer :: max_iter, iter

  ! Function prototypes
  real(8) :: f, f_prime
  real(8) :: x_init

  ! Define the function f(x)
  contains
  function f(x)
    real(8) :: f
    real(8), intent(in) :: x
    ! Example function: f(x) = x^2 - 4
    f = x**2 - 4.0
  end function f

  ! Define the derivative f'(x)
  function f_prime(x)
    real(8) :: f_prime
    real(8), intent(in) :: x
    ! Derivative of the example function: f'(x) = 2x
    f_prime = 2.0 * x
  end function f_prime

  ! Read input values
  print *, 'Enter the initial guess:'
  read *, x_init
  print *, 'Enter the tolerance:'
  read *, tol
  print *, 'Enter the maximum number of iterations:'
  read *, max_iter

  ! Newton-Raphson Method
  x = x_init
  iter = 0
  do while (iter < max_iter)
    fx = f(x)
    fpx = f_prime(x)
    if (abs(fpx) < tol) then
      print *, 'Derivative is too small. Exiting.'
      stop
    endif
    x = x - fx / fpx
    if (abs(fx) < tol) exit
    iter = iter + 1
  end do

  ! Output the result
  print *, 'Approximated root:', x
  print *, 'Function value at root:', f(x)
  print *, 'Number of iterations:', iter

end program newton_raphson
```


Watch the full tutorial video:
{% include youtube.html id="33OE_UrEPlk" %}


Link of the downloaded script file: [Examples Directory](https://github.com/mohangiri1/Fortran/tree/main/examples)

# Resources:
1. [https://personal.math.ubc.ca/~anstee/math104/newtonmethod.pdf](https://personal.math.ubc.ca/~anstee/math104/newtonmethod.pdf)
2. [https://personal.math.ubc.ca/~anstee/math104/newtonmethod.pdf](https://personal.math.ubc.ca/~anstee/math104/newtonmethod.pdf)
3. [http://www.sosmath.com/calculus/diff/der07/der07.html](http://www.sosmath.com/calculus/diff/der07/der07.html)
