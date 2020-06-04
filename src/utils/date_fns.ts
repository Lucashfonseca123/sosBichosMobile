import {parse, format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

const parseDate = (
  date: string,
  formatString: string = 'yyyy-MM-dd HH:mm:ss',
) => {
  let dateCopy = date.split('T');

  return format(
    parse(dateCopy[0], 'yyyy-MM-dd', new Date()),
    // "'Dia' dd 'de' MMMM yyyy', às ' HH:mm'h'",
    "'dia' dd 'de' MMMM 'de' yyyy'",
    {
      locale: ptBR,
    },
  );
};

export {parseDate};
