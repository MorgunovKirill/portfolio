import {ComponentPropsWithoutRef, forwardRef} from 'react'
import s from './textarea.module.scss'
import clsx from 'clsx'

export type TextareaProps = {
  titleLabel?: string
  error?: string
  className?: string
} & ComponentPropsWithoutRef<'textarea'>
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, titleLabel, className, ...rest }, ref) => {
    const htmlForMessage = 'message'
    return (
      <div className={clsx(s.textareaRoot, className)}>
        <label className={s.textAreaLabel} htmlFor={htmlForMessage}>
          {titleLabel}
        </label>
        <textarea
          className={clsx(s.textArea, error && s.errorBorder)}
          placeholder={rest.placeholder}
          id={htmlForMessage}
          ref={ref}
          disabled={rest.disabled}
          {...rest}
        />
        {error && <span className={s.textAreaError}>{error}</span>}
      </div>
    )
  }
)


Textarea.displayName = 'Textarea'; // Добавляем displayName