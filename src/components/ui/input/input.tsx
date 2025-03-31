import { useState, forwardRef, ComponentPropsWithoutRef, useId } from 'react'
import styles from './input.module.scss'
import clsx from 'clsx'

export type InputProps = {
  errorMsg?: string
  type?: 'password' | 'search' | 'email' | 'text'
  label?: string
  placeholder?: string
  containerClassName?: string
  className?: string
  markedAsRequired?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, errorMsg, type = 'text', label, placeholder, containerClassName, className, markedAsRequired = false, ...rest },
    ref
  ) => {
    const generatedId = useId()
    const finalId = id ? id : generatedId
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className={containerClassName}>
        {label && (
          <label className={clsx(styles.label)} htmlFor={finalId}>
            {label}{markedAsRequired ? (<span className={styles.markedAsRequired}>*</span>) : ('')}
          </label>
        )}
        <div className={clsx(styles.inputContainer, isFocused && styles.active)}>
          <input
            id={finalId}
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={clsx(
              styles.inputField,
              errorMsg && styles.error,
              rest.disabled && styles.disabled,
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={rest.disabled}
            {...rest}
          />
        </div>
        <p className={`${styles.errorMsg} ${errorMsg ? styles.show : ''}`}>{errorMsg}</p>
      </div>
    )
  }
)

Input.displayName = 'Input';