import 'https://deno.land/x/flat@0.0.14/mod.ts'

// Forwards the execution to the bash script
const bash_run = Deno.run({
    // FIXME: when the script fails, we must fail.
    cmd: ['./data/postprocessing.sh'].concat(Deno.args),
});

await bash_run.status();