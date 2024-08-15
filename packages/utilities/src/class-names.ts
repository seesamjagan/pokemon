type ClassMapType = { [className: string]: boolean };

export default function classNames(...args: (string | string[] | null | undefined | ClassMapType)[]):string {
    //
    function toClass(classMap: ClassMapType) {
        return Object.keys(classMap)
            .filter(className => classMap[className])
            .join(' ');
    }
    return args
        .map((value) => {
            const valType = typeof value;
            if (valType === 'string') {
                return value;
            }
            else if (Array.isArray(value)) {
                return classNames(...value);
            }
            else if (valType === 'object') {
                return toClass(value as ClassMapType);
            }
            return false;
        })
        .filter(cn => !!cn)
        .join(' ');
}