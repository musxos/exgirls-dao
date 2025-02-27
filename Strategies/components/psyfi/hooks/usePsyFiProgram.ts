import { AnchorProvider, Program } from '@project-serum/anchor'
import { PsyFiEuros, PsyFiIdl } from 'psyfi-euros-test'
import { useMemo } from 'react'
import useWalletStore from 'stores/useWalletStore'
import { MAINNET_PROGRAM_KEYS } from '../programIds'

export const usePsyFiProgram = () => {
  const connection = useWalletStore((s) => s.connection)
  const wallet = useWalletStore((s) => s.current)

  // construct the PsyFi program. This could be pulled into a hook
  return useMemo(() => {
    const anchorProvider = new AnchorProvider(
      connection.current,
      wallet as any,
      {}
    )
    return new Program<PsyFiEuros>(
      PsyFiIdl,
      MAINNET_PROGRAM_KEYS.PSYFI_V2,
      anchorProvider
    )
  }, [connection.current, wallet])
}
