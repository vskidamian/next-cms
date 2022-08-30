import { Switch } from '@headlessui/react'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/solid'

type ContentProps = {
    
}

export const Content = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    const [checked, setChecked] = useState(resolvedTheme === 'light' ? false : true)

    const handleSwitchChange = () => {
        (theme === 'light') ? setTheme('dark') : setTheme('light')
        setChecked(!checked);
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted)
        return null

    return (
        <Switch
            checked={checked}
            onChange={handleSwitchChange}
            className={`${checked ? 'bg-primaryDark' : 'bg-primary'} relative h-6 w-11 items-center rounded-full hidden md:inline-flex`}
        >
            <span
                className={`${checked ? 'translate-x-5' : 'translate-x-1'
                    } inline-block transform transition ease-in-out duration-200 h-5 w-5 rounded-full relative`}>
                    <SunIcon className={`h-5 w-5 text-white transform transition ease-in-out duration-300 absolute  ${checked ? 'opacity-100' : 'opacity-0'}`} />
                    <MoonIcon className={`h-5 w-5 text-white transform transition ease-in-out duration-300 absolute ${checked ? 'opacity-0' : 'opacity-100'}`} />
            </span>
        </Switch>
    )
}

export default Content
