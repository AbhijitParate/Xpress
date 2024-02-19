

class Result {
    static Error = function from(message) {
        return {error: message}
    }

    static Value = function from(value, type) {
        return {
            value: value,
            type: type
        }
    }
    static Type = {
        TEXT: 'text',
        NUMBER: 'number',
        BOOLEAN: 'boolean',
        NONE: 'none'
    }
}

export {Result}
