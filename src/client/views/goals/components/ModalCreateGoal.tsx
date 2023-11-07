import * as elements from 'typed-html';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

interface IInputProps {
  id: string;
  label: string;
  type?: 'text' | 'textarea';
}

const inputClassList =
  'w-full rounded-lg border border-slate-300 px-2 py-1 focus:outline-none';

/** @todo - InputRow as generic component */
const InputRow = ({ id, label, type = 'text' }: IInputProps) => (
  <div class="flex w-full flex-col gap-1">
    <label for={id}>{label}</label>
    {type === 'textarea' ? (
      <textarea id={id} name={id} class={`${inputClassList} resize-none`} />
    ) : (
      <input id={id} name={id} type={type} class={inputClassList} />
    )}
  </div>
);

const ModalCreateGoal = () => (
  <Modal title="Create Goal">
    <form class="flex w-full flex-col gap-4" hx-post="/goals/create">
      <InputRow id="title" label="Title" />
      <InputRow id="description" label="Description" type="textarea" />
      <div class="flex w-full justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  </Modal>
);

export default ModalCreateGoal;
