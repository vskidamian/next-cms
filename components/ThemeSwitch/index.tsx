import { Switch } from '@headlessui/react'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'


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
            className={`${checked ? 'bg-primaryDark' : 'bg-primary'} relative h-6 w-11 items-center rounded-full hidden sm:inline-flex`}
        >
            <span
                className={`${checked ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 rounded-full bg-white transform transition ease-in-out duration-200`}
            />
        </Switch>
    )
}

export default Content
