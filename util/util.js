class Util{
    constructor(){
        
    }
    static cmd = {
        format: {
            normal: {
                date: 'dd-MM-yyyy',
                time: 'hh:mm:ss'
            },
            metric: {
                date: 'ddd-MM-yyyy',
                time: 'hh:mm:ss'
            },
        },
        help: 'node index.js -h',
        conversions: {
            main: 'node index.js -c <conversion-type> [time|date] ${time|date}',
            conversion_type: {
                m2n: 'm2n',
                n2m: 'n2m',
            },
        },
        arithmetics: {
            main: 'node index.js -c <arithmetic-type> [time|date] ${time|date} ${days|mints}',
            arithmetic_type:{
                add: 'a',
                subtract: 's',
            }
        }

    }

    static invalidArguments(arg){
        console.log('\n`'+arg+'` isn\'t a valid arguments.');
        console.log('\nUse `'+this.cmd.help+'` command to know more about available commands.');
    }
    static help(){
        this.desc();
        console.log('\n1) '+this.cmd.help+'\t:show help');

        console.log('\n2) Format\tMetric\t\tNormal');
        console.log('   Date\t\t'+this.cmd.format.metric.date+'\t'+this.cmd.format.normal.date);
        console.log('   Time\t\t'+this.cmd.format.metric.time+'\t'+this.cmd.format.normal.time);

        console.log('\n4) '+this.cmd.conversions.main+'\t=> Convert metric datetime system to normal datetime system');
        console.log('\t conversion-type\t: '+this.cmd.conversions.conversion_type.m2n+'\t => Convert metric system to normal system');
        console.log('\t conversion-type\t: '+this.cmd.conversions.conversion_type.n2m+'\t => Convert normal system to metric system');
        console.log('\t [time|date]\t\t: '+'time'+'\t => Convert time from one system to other');
        console.log('\t [time|date]\t\t: '+'date'+'\t => Convert date from one system to other');
        console.log('\t ${time|date}\t\t: '+''+'\t => Date/Time value in specified format to convert');

        console.log('\n5) '+this.cmd.arithmetics.main+'\t=> Add or subtract days or minutes from given date or time');
        console.log('\t arithmetic-type\t: '+this.cmd.arithmetics.arithmetic_type.add+'\t => Add days or minutes');
        console.log('\t arithmetic-type\t: '+this.cmd.arithmetics.arithmetic_type.subtract+'\t => Subtract days or minutes');
        console.log('\t [time|date]\t\t: '+'time'+'\t => Add or Subtract minutes from time');
        console.log('\t [time|date]\t\t: '+'date'+'\t => Add or Subtract days from date');
        console.log('\t ${time|date}\t\t: '+''+'\t => Initial Date/Time value in specified format');
        console.log('\t ${days|mints}\t\t: '+''+'\t => Days or minute to add or subtract');
        
    }
    static desc(){
        console.log('**A js library to work with metric time system**');
    }
}

export default Util;