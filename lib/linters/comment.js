'use strict';

module.exports = {
    name: 'comment',
    nodeTypes: ['comment'],
    message: "There shouldn't be any multi-line comments.",

    lint: function commentLinter (config, node) {
        var regexp;

        if (node.inline) {
            return;
        }

        if (config.allowed) {
            regexp = new RegExp(config.allowed);
        }

        if (!regexp || (regexp && !regexp.test(node.text))) {
            return [{
                message: this.message
            }];
        }
    }
};
