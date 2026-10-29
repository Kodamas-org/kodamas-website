# Turns an article <slug>.md into its plain-text <slug>.txt.
# Usage: python3 md2txt.py <slug>.md > <slug>.txt
import re, sys
src = open(sys.argv[1]).read()
_, fm, body = src.split('---\n', 2)
def field(k):
    m = re.search(r'^%s:\s*"?(.*?)"?\s*$' % k, fm, re.M); return m.group(1)
out = [f"SEO title: {field('seoTitle')}", f"Meta description: {field('description')}",
       f"Slug: {field('slug')}", f"Status: {field('status')}", ""]
def inline(t):
    t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1 (\2)', t)
    t = re.sub(r'\*\*(.+?)\*\*', r'\1', t)
    t = re.sub(r'\*(.+?)\*', r'\1', t)
    return t
for line in body.strip('\n').split('\n'):
    if line.startswith('# '): out.append(line[2:].upper())
    elif line.startswith('## '):
        while out and out[-1] == '': out.pop()
        out += ['', '', line[3:].upper()]
    elif line.startswith('### '): out.append(inline(line[4:]))
    elif line.startswith('<!-- IMAGE:'):
        m = re.match(r'<!-- IMAGE: (.*?) Alt: (".*?") -->', line)
        out.append(f"[Image idea: {m.group(1)} Alt text: {m.group(2)}]")
    elif line.strip() == '---': out.append('____')
    elif line.startswith('- '): out.append('• ' + inline(line[2:]))
    else: out.append(inline(line))
print('\n'.join(out))
