# Demo Web Shop Registration Test Plan

## Application Overview

Scope: Registration at https://demowebshop.tricentis.com/register, reached from the home page Register link or by direct navigation. The form contains optional Gender (Male/Female), required First name, Last name, Email, Password, and Confirm password fields. Observed validation includes “First name is required.”, “Last name is required.”, “Email is required.”, “Password is required.”, “Wrong email”, password minimum length 6 (“The password should have at least 6 characters.”), and mismatch (“The password and confirmation password do not match.”). All scenarios start from a clean signed-out browser state. Use a fresh unique email for each successful account-creation scenario; do not reuse a created account. Test data: valid first/last name = Ava / Tester; valid email = registration.<unique-id>@example.com; valid password and confirmation = ShopPass123!; short password = abc12; mismatched confirmation = ShopPass124!; malformed emails = not-an-email and user@. Gender may be selected as Male/Female or left unselected as specified. For duplicate-email coverage, create the fixture account within that scenario using a unique email, sign out, then attempt a second registration with the same email. Registration creates persistent server-side test data, so record generated addresses and use only disposable test data. This is a manual test plan only: referenced spec paths are future destinations and no automation code is included.

## Test Scenarios

### 1. Positive registration scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Register a new customer with Male selected

**File:** `tests/registration/registration-happy-path.spec.js`

**Steps:**
  1. Start from the signed-out home page and open Register.
    - expect: The registration page opens and shows Gender, First name, Last name, Email, Password, Confirm password, and Register controls.
  2. Select Male. Enter First name Ava, Last name Tester, a unique valid email registration.<unique-id>@example.com, and ShopPass123! in both password fields.
    - expect: The entered values are accepted; the password confirmation matches.
  3. Submit the registration form.
    - expect: Registration completes successfully and a registration-completed confirmation is shown.
    - expect: The new account is authenticated or otherwise visibly identified as registered, consistent with the site's post-registration flow.
    - expect: No field validation errors are shown.

#### 1.2. Register a new customer with Female selected

**File:** `tests/registration/registration-female-gender.spec.js`

**Steps:**
  1. Start from a clean signed-out state, open the registration page, and select Female.
    - expect: Female is selected and the registration form is displayed.
  2. Enter Ava Tester, a new unique valid email, and matching ShopPass123! values in Password and Confirm password.
    - expect: All required details are provided and confirmation matches.
  3. Submit the form.
    - expect: Registration succeeds with the site's completion confirmation and no validation errors.

#### 1.3. Register without selecting a gender

**File:** `tests/registration/registration-optional-gender.spec.js`

**Steps:**
  1. Start from a clean signed-out state and open the registration page; leave both gender options unselected.
    - expect: Neither gender option is selected.
  2. Enter Ava Tester, a new unique valid email, and matching ShopPass123! values in both password fields.
    - expect: All required fields are populated.
  3. Submit the form.
    - expect: Registration succeeds, confirming gender is optional.
    - expect: No gender-required validation error is displayed.

### 2. Negative registration and validation scenarios

**Seed:** `tests/seed.spec.ts`

#### 2.1. Reject a completely blank registration form

**File:** `tests/registration/registration-required-fields.spec.js`

**Steps:**
  1. Start from a clean signed-out state, open Register, leave all fields blank, and submit.
    - expect: The form remains on the registration page and no account is created.
    - expect: First name is required., Last name is required., Email is required., and Password is required. errors are displayed for their respective fields; the confirmation field also reports Password is required.

#### 2.2. Reject malformed email addresses

**File:** `tests/registration/registration-invalid-email.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Fill all required fields with valid values, except enter not-an-email in Email; use matching valid passwords, then submit.
    - expect: The form is not submitted and the email field displays “Wrong email”.
    - expect: Other valid field values remain available for correction; no account is created.
  2. Repeat from a fresh registration state with Email set to user@ and otherwise valid values.
    - expect: The malformed address is rejected and no account is created.

#### 2.3. Reject a password shorter than six characters

**File:** `tests/registration/registration-short-password.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Enter valid names and email, set both Password and Confirm password to abc12 (5 characters), then submit.
    - expect: Registration is rejected and the password field displays “The password should have at least 6 characters.”
    - expect: No account is created.

#### 2.4. Reject non-matching password confirmation

**File:** `tests/registration/registration-password-mismatch.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Enter valid names and email, set Password to ShopPass123! and Confirm password to ShopPass124!, then submit.
    - expect: Registration is rejected and Confirm password displays “The password and confirmation password do not match.”
    - expect: No account is created.

#### 2.5. Reject a missing first name

**File:** `tests/registration/registration-missing-first-name.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Fill valid values in every required field except First name, then submit.
    - expect: The First name is required. error is shown; registration is not completed and no account is created.

#### 2.6. Reject a missing last name

**File:** `tests/registration/registration-missing-last-name.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Fill valid values in every required field except Last name, then submit.
    - expect: The Last name is required. error is shown; registration is not completed and no account is created.

#### 2.7. Reject a missing email address

**File:** `tests/registration/registration-missing-email.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Fill valid values in every required field except Email, then submit.
    - expect: The Email is required. error is shown; registration is not completed and no account is created.

#### 2.8. Reject a missing password

**File:** `tests/registration/registration-missing-password.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Fill valid names and email, leave Password blank, and enter a value in Confirm password, then submit.
    - expect: The Password is required. error is shown; registration is not completed.

#### 2.9. Reject a missing password confirmation

**File:** `tests/registration/registration-missing-confirm-password.spec.js`

**Steps:**
  1. Start from a clean signed-out state. Fill valid names and email, enter ShopPass123! in Password, leave Confirm password blank, then submit.
    - expect: The confirmation field displays Password is required.; registration is not completed.

#### 2.10. Reject an email address that is already registered

**File:** `tests/registration/registration-duplicate-email.spec.js`

**Steps:**
  1. In this scenario only, register a disposable fixture account using valid data and a unique email; verify completion, then sign out.
    - expect: A fixture account exists for this scenario and the browser is signed out.
  2. Open Register and submit another otherwise valid registration using the fixture account's exact email address.
    - expect: Registration is rejected with a clear duplicate/already-registered email message.
    - expect: The form does not report successful registration and no second account is created.
