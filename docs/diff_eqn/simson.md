---
layout: default
title: Simpson's One-Third Rule
---

# Simpson's One-Third Rule for Numerical Integration

Simpson's One-Third Rule is a method for numerical integration, the process of finding the integral of a function. This method is based on approximating the integrand by a quadratic polynomial and is known for its accuracy compared to other numerical integration methods like the trapezoidal rule.

## Overview of Simpson's One-Third Rule

Simpson's One-Third Rule works by dividing the integration interval into an even number of subintervals of equal width, applying the quadratic approximation on each pair of subintervals, and summing the results.

The formula for Simpson's One-Third Rule is:

\[ \int_{a}^{b} f(x) \, dx \approx \frac{h}{3} \left[ f(a) + 4 \sum_{i=1,3,5,\ldots}^{n-1} f(x_i) + 2 \sum_{i=2,4,6,\ldots}^{n-2} f(x_i) + f(b) \right] \]

where:
- \( h = \frac{b - a}{n} \) is the width of each subinterval.
- \( n \) is the number of subintervals (must be even).
- \( x_i = a + ih \) are the endpoints of the subintervals.

## Example

Consider the integral:

\[ \int_{0}^{1} \sin(x) \, dx \]

We will use Simpson's One-Third Rule to approximate this integral.

### Implementation in Fortran

Below is a Fortran program that implements Simpson's One-Third Rule for numerical integration.

#### Fortran Code

```fortran
program simpson
  implicit none
  real(8) :: a, b, h, integral
  integer :: n, i

  ! Function prototype
  real(8) :: f
  real(8), intent(in) :: x

  ! Define the function f(x)
  contains
  function f(x)
    real(8) :: f
    real(8), intent(in) :: x
    f = sin(x)
  end function f

  ! Read input values
  print *, 'Enter the lower limit a:'
  read *, a
  print *, 'Enter the upper limit b:'
  read *, b
  print *, 'Enter the number of subintervals n (must be even):'
  read *, n

  ! Check if n is even
  if (mod(n, 2) /= 0) then
    print *, 'Error: Number of subintervals must be even.'
    stop
  end if

  ! Calculate the width of each subinterval
  h = (b - a) / n

  ! Initialize the integral
  integral = f(a) + f(b)

  ! Apply Simpson's One-Third Rule
  do i = 1, n - 1
    if (mod(i, 2) == 0) then
      integral = integral + 2.0 * f(a + i * h)
    else
      integral = integral + 4.0 * f(a + i * h)
    end if
  end do

  integral = integral * h / 3.0

  ! Output the result
  print *, 'Approximate value of the integral:', integral

end program simpson
```

Watch the full tutorial video:
{% include youtube.html id="P_ifOJu6Hp4" %}


Link of the downloaded script file: [Examples Directory](https://github.com/mohangiri1/Fortran/tree/main/examples)

