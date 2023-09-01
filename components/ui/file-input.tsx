import Uploader from '@components/common/uploader';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
interface FileInputProps {
  control: any;
  name: string;
  multiple?: boolean;
}

const FileInput = ({ control, name, multiple = true }: FileInputProps) => {
  const [info, updateInfo] = useState();
  const [error, updateError] = useState();

  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      return;
    }

    updateInfo(result?.info);
    
    widget.close({
      quiet: true
    });
  }
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      // eslint-disable-next-line no-unused-vars
      render={({ field: { ref, ...rest } }) => (
        <div>
          <CldUploadButton {...rest} uploadPreset="fthamcu8" onUpload={rest.onChange} />
        </div>
      )}
    />
  );
};

export default FileInput;
