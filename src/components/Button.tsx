import { ComponentProps } from 'react'
import cx from 'classnames'
import Loader from './Loader'

export default function Button({
  children,
  className,
  loading = false,
  type = 'button',
  ...props
}: ComponentProps<'button'> & {
  loading?: boolean
}) {
  return (
    <button
      className={cx(
        'w-full flex justify-center rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50',
        className,
        props.disabled && 'pointer-events-none opacity-75'
      )}
      type={type}
      {...props}
    >
      {!loading ? children : <Loader className="h-6 w-6" />}
    </button>
  )
}
