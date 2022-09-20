'use strict';

import {
    CodeActionParams,
} from 'vscode-languageclient';

export interface AnnotationResponse {
    annotations: string[];
}

export interface LombokRequestParams {
    context: CodeActionParams;
    annotationsToLombok: string[];
    annotationsToDelombok: string[];
}
