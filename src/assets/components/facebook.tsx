import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill={'#fff'}
        height={'20'}
        ref={ref}
        viewBox={'0 0 10 20'}
        width={'10'}
        xmlns={'http://www.w3.org/2000/svg'}
        {...props}
    >
            <path
                d="M9.4866 0.25H6.42996C4.61604 0.25 2.59845 1.02784 2.59845 3.70863C2.60731 4.64273 2.59845 5.53731 2.59845 6.54411H0.5V9.94872H2.66339V19.75H6.63873V9.88404H9.2626L9.5 6.53456H6.57023C6.57023 6.53456 6.57679 5.04457 6.57023 4.61187C6.57023 3.55248 7.65141 3.61314 7.71645 3.61314C8.23094 3.61314 9.2313 3.61467 9.4881 3.61314V0.25H9.4866Z"
                fill="white"/>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
