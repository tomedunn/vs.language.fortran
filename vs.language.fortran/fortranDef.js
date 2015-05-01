/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'Fortran',
        name: 'fortran',
        mimeTypes: [],
        defaultToken: '',
        ignoreCase: true,
        lineComment: '!',
        autoClosingPairs: [['{', '}'], ['[', ']'], ['(', ')'], ['"', '"']],
        brackets: [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' },
        ],
        keywords: [
            'abstract',
            'all',
            'allocatable',
            'allocate',
            'assign',
            'assignment',
            'asynchronous',
            'backspace',
            'bind',
            'block',
            'blockdata',
            'character',
            'close',
            'common',
            'complex',
            'concurrent',
            'contiguous',
            'call',
            'case',
            'class',
            'codimension',
            'contains',
            'continue',
            'cycle',
            'data',
            'deallocate',
            'deferred',
            'dimension',
            'do',
            'double',
            'doubleprecision',
            'elemental',
            'else',
            'elsewhere',
            'end',
            'endblock',
            'endblockdata',
            'enddo',
            'endenum',
            'endfile',
            'endforall',
            'endfunction',
            'endif',
            'endinterface',
            'endmodule',
            'endprogram',
            'endselect',
            'endsubmodule',
            'endsubroutine',
            'endtype',
            'endwhere',
            'endwhile',
            'entry',
            'enum',
            'enumerator',
            'equivalence',
            'error',
            'exit',
            'external',
            'final',
            'flush',
            'forall',
            'format',
            'function',
            'generic',
            'go',
            'goto',
            'if',
            'implicit',
            'import',
            'in',
            'include',
            'inout',
            'inquire',
            'integer',
            'intent',
            'interface',
            'intrinsic',
            'is',
            'logical',
            'module',
            'non_overridable',
            'nopass',
            'nullify',
            'only',
            'open',
            'operator',
            'optional',
            'out',
            'parameter',
            'pass',
            'pause',
            'pointer',
            'precision',
            'print',
            'private',
            'procedure',
            'program',
            'protected',
            'public',
            'pure',
            'read',
            'real',
            'recursive',
            'result',
            'return',
            'rewind',
            'save',
            'select',
            'sequence',
            'stop',
            'submodule',
            'subroutine',
            'target',
            'then',
            'to',
            'type',
            'use',
            'value',
            'volatile',
            'wait',
            'where',
            'while',
            'write'
        ],
        operators: [
            '=',
            '==',
            '/=',
            '>',
            '>=',
            '<',
            '<=',
            '=>',
            '+',
            '-',
            '*',
            '/',
            '**',
            '//',
            '.and.',
            '.eq.',
            '.eqv.',
            '.le.',
            '.lt.',
            '.ge.',
            '.gt.',
            '.ne.',
            '.neqv.',
            '.not.',
            '.or.'
        ],
        functions: [
            'abs',
            'achar',
            'acos',
            'acosh',
            'adjustl',
            'adjustr',
            'aimag',
            'aint',
            'all',
            'allocated',
            'anint',
            'any',
            'asin',
            'asinh',
            'associated',
            'atan',
            'atan2',
            'atanh',
            'bessel_j0',
            'bessel_j1',
            'bessel_jn',
            'bessel_y0',
            'bessel_y1',
            'bessel_yn',
            'bge',
            'bgt',
            'bit_size',
            'ble',
            'blt',
            'btest',
            'c_associated',
            'c_funloc',
            'c_loc',
            'c_sizeof',
            'ceiling',
            'char',
            'cmplx',
            'command_argument_count',
            'compiler_options',
            'compiler_version',
            'conjg',
            'cos',
            'cosh',
            'count',
            'cshift',
            'dble',
            'digits',
            'dim',
            'dot_product',
            'dprod',
            'dshiftl',
            'dshiftr',
            'eoshift',
            'epsilon',
            'erf',
            'erfc',
            'erfc_scaled',
            'exp',
            'exponent',
            'extends_type_of',
            'findloc',
            'floor',
            'fraction',
            'gamma',
            'huge',
            'hypot',
            'iachar',
            'iall',
            'iand',
            'iany',
            'ibclr',
            'ibits',
            'ibset',
            'ichar',
            'ieee_class',
            'ieee_copy_sign',
            'ieee_is_finite',
            'ieee_is_nan',
            'ieee_is_normal',
            'ieee_logb',
            'ieee_next_after',
            'ieee_rem',
            'ieee_rint',
            'ieee_scalb',
            'ieee_selected_real_kind',
            'ieee_support_datatype',
            'ieee_support_denormal',
            'ieee_support_divide',
            'ieee_support_flag',
            'ieee_support_halting',
            'ieee_support_inf',
            'ieee_support_io',
            'ieee_support_nan',
            'ieee_support_rounding',
            'ieee_support_sqrt',
            'ieee_support_standard',
            'ieee_support_underflow_control',
            'ieee_unordered',
            'ieee_value',
            'ieor',
            'image_index',
            'index',
            'int',
            'ior',
            'iparity',
            'ishft',
            'ishftc',
            'is_contiguous',
            'is_iostat_end',
            'is_iostat_eor',
            'kind',
            'lbound',
            'lcobound',
            'leadz',
            'len',
            'len_trim',
            'lge',
            'lgt',
            'lle',
            'llt',
            'log',
            'log_gamma',
            'log10',
            'logical',
            'maskl',
            'maskr',
            'matmul',
            'max',
            'maxexponent',
            'maxloc',
            'maxval',
            'merge',
            'merge_bits',
            'min',
            'minexponent',
            'minloc',
            'minval',
            'mod',
            'modulo',
            'nearest',
            'new_line',
            'nint',
            'norm2',
            'not',
            'null',
            'num_images',
            'pack',
            'parity',
            'popcnt',
            'poppar',
            'precision',
            'present',
            'product',
            'radix',
            'range',
            'real',
            'repeat',
            'reshape',
            'rrspacing',
            'same_type_as',
            'scale',
            'scan',
            'selected_char_kind',
            'selected_int_kind',
            'selected_real_kind',
            'set_exponent',
            'shape',
            'shifta',
            'shiftl',
            'shiftr',
            'sign',
            'sin',
            'sinh',
            'size',
            'spacing',
            'spread',
            'sqrt',
            'storage_size',
            'sum',
            'tan',
            'tanh',
            'this_image',
            'tiny',
            'trailz',
            'transfer',
            'transpose',
            'trim',
            'ubound',
            'ucobound',
            'unpack',
            'verify'
        ],
        subroutines: [
            'c_f_pointer',
            'c_f_procpointer',
            'cpu_time',
            'date_and_time',
            'execute_command_line',
            'get_command',
            'get_command_argument',
            'get_environment_variable',
            'ieee_get_flag',
            'ieee_get_halting_mode',
            'ieee_get_rounding_mode',
            'ieee_get_status',
            'ieee_get_underflow_mode',
            'ieee_set_flag',
            'ieee_set_halting_mode',
            'ieee_set_rounding_mode',
            'ieee_set_status',
            'ieee_set_underflow_mode',
            'move_alloc',
            'mvbits',
            'random_number',
            'random_seed',
            'system_clock'
        ],
        // the default separators
        wordDefinition: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        // we include these common regular expressions
        symbols: /[=><!~?&%|+\-*\/\^\.,\:]+/,
        escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /(_[a-z]\w*)?/,
        floatsuffix: /(_[a-z]\w*)?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                { include: '@whitespace' },
                [/!.*$/, 'comment'],
                [/^\s*#\w+/, 'keyword'],
                [/[{}()\[\]]/, '@brackets'],
                [/\d+\.\d+([de][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d+[de]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d+(@integersuffix)/, 'number'],
                [/@symbols/, { cases: { 
                    '@operators': 'delimiter', 
                    '@default': ''
                } }],
                [/[;,]/, 'delimiter'],
                [/"/, { cases: { 
                    '@eos': 'string', 
                    '@default': { token: 'string', next: '@string."' }
                } }],
                [/'/, { cases: { 
                    '@eos': 'string', 
                    '@default': { token: 'string', next: '@string.\'' } 
                } }],
                [/[a-zA-Z_]\w*/, { cases: {
                    'this': 'variable.predefined', 
                    '@keywords': { token: 'keyword.$0' },
                    '@functions': { token: 'keyword.$0' },
                    '@subroutines': { token: 'keyword.$0' },
                    '@default': ''
                } }]
            ],
            whitespace: [
                [/[ \t\r\n]+/, '']
            ],
            comment: [
                [/!/, 'comment']
            ],
            string: [
                [/[^"'\#\\]+/, 'string'],
                [/#{/, { cases: { 
                    '$S2=="': { token: 'string', next: 'root.interpolatedstring' }, 
                    '@default': 'string'
                } }],
                [/["']/, { cases: { 
                    '$#==$S2': { token: 'string', next: '@pop' }, 
                    '@default': 'string'
                } }]
            ],
        },
    };
});